import {useState,useEffect} from 'react'
import { NavLink , useNavigate} from "react-router-dom";
import navbar_styles from './navbar.module.css'
// import {Navbar,Nav,Form} from 'react-bootstrap'
import {FaBars,FaSearch,FaShoppingCart,FaUser} from 'react-icons/fa'
import {BsDroplet} from 'react-icons/bs'
import logo from '../../../images/logo1.png'
import {Login} from './Login'
import {Cart} from './Cart/Cart'

export function NavBar(){

    const navigate = useNavigate()
    const [searchForm,setSearchForm] = useState({"toggle":false,"disp":"none"});
    const [cart,setCart] = useState({"toggle":false,"disp":"none"});
    const [loginForm,setLoginForm] = useState({"toggle":false,"disp":"none"});

    const searchFormActivate = () => {
      setLoginForm({"toggle":false,"disp":"none"})
      setCart({"toggle":false,"disp":"none"})
      if(searchForm.toggle===true){
        setSearchForm({"toggle":false,"disp":"none"})
      }
      else{
        setSearchForm({"toggle":true,"disp":""})
      }
    }

    const cartActivate = () => {
      setLoginForm({"toggle":false,"disp":"none"})
      setSearchForm({"toggle":false,"disp":"none"})
      if(cart.toggle === true){
        setCart({"toggle":false,"disp":"none"})
      }
      else{
        setCart({"toggle":true,"disp":""})
      }
    }

    const loginFormActivate = () => {
      setSearchForm({"toggle":false,"disp":"none"})
      setCart({"toggle":false,"disp":"none"})
      if(loginForm.toggle===true){
        setLoginForm({"toggle":false,"disp":"none"})
      }
      else{
        setLoginForm({"toggle":true,"disp":""})
      }
    }


    const onScroll = (e) => {
      setSearchForm({"toggle":false,"disp":"none"})
      setLoginForm({"toggle":false,"disp":"none"})
      setCart({"toggle":false,"disp":"none"})
    }

    const logonav = () => {
        navigate('/')
    }
  
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
    },[]);

    return (
      <>
      <div className={navbar_styles.maincontainer}>
        <div onClick={logonav}><img className={navbar_styles.logo} src={logo} alt='logo'/></div>

        <nav className={navbar_styles.navbar}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>

        <div>
            <FaBars className={navbar_styles.menu}/>
            <FaSearch className={navbar_styles.icons} onClick={searchFormActivate}/>
            <FaShoppingCart className={navbar_styles.icons} onClick={cartActivate}/>
            <FaUser className={navbar_styles.icons} onClick={loginFormActivate}/>
        </div>

      {searchForm.toggle === true ? 
  
  <form className={navbar_styles.searchform} style={{display:searchForm.disp}}>
  <input type="search" placeholder="Search here..."/>
  <label><FaSearch/></label>
  </form> :
   (loginForm.toggle === true ? <Login style={{display:loginForm.disp}}/> : 
       
   (cart.toggle === true ? <Cart style={{display:cart.disp}}/> : <></>)
   
   )}
    </div>
    </>
    )
}

