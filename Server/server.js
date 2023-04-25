const express = require("express");
const app = express();
const path = require('path')
app.use(express.json());

const core = require('cors')
app.use(core())

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
const dotenv = require('dotenv')
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/.env" });
}

// Connecting to database
const connectDatabase = require("./config/db");
connectDatabase();

const morgan = require('morgan')
app.use(morgan('dev'));

const authRoutes = require('./routes/authRoute.js')
app.use('/api/v1/auth',authRoutes)


app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;