import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import {Header} from './component/layout/Header/Header'
import {Footer} from './component/layout/Footer/Footer'
import {Home} from './component/Home/Home'
import {Products} from './component/Products/Products'
import {Shop} from './component/Shop/Shop'
import {About} from './component/About/About'
import {Contact} from './component/Contact/contact'
import {AddProduct} from './component/Admin/new'
import {UpdateProduct} from './component/Admin/UpdateProduct'
import Payment from "./component/payment/Payment"
import { useState } from "react";
function App() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
  return (
        
  <Router>
    <header>
    <ToastContainer/>
    <Header/>
    </header>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route> 
      <Route path='/shop' element={<Shop/>}></Route> 
      <Route path='/about' element={<About/>}></Route> 
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path="/admin/newproduct" element={<AddProduct/>}></Route>
      <Route path="/admin/updateproduct/:pid" element={<UpdateProduct/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>

    </Routes>
    </main>
    <footer>
    <Footer/>
    </footer>
  </Router>
    
  );
}

export default App;
