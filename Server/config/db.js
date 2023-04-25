const mongoose = require('mongoose');

const connectDatabase = async () => {

    try{
        await mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,})
        .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
    }
    catch(error){
        console.log(`Erron in connecting to MongoDB ${error}`)
    }
};

module.exports = connectDatabase;
