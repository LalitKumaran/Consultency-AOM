import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import {Header} from './component/layout/Header/Header'
import {Footer} from './component/layout/Footer/Footer'
import {Home} from './component/Home/Home'
import {Shop} from './component/Shop/Shop'
import {About} from './component/About/About'
import {Contact} from './component/Contact/contact'

function App() {
  return (

  <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route> 
    <Route path='/about' element={<About/>}></Route> 
    <Route path='/contact' element={<Contact/>}></Route> 
    </Routes>
    <Footer/>
  </Router>
    
  );
}

export default App;
