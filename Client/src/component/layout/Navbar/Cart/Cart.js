import cart_styles from './cart.module.css'
import {useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
import {FaTimes} from 'react-icons/fa'
import {Login} from '../Login'
import axios from 'axios'

export const Cart = () => {

    const [cart,setCart] = useState([])

    const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    
    const load = async () => {
        axios.get(`api/cart/user/${user._id}`).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{console.log(err)})
    }

    const checkout = () => {
        //
    }

    useEffect(()=>{
        if(user){
            load()
        }  
    },[])

    return (
        <>
        {user?
        <div className={`${cart_styles.shopping_cart} active`}>
        <div className={cart_styles.box}>
            <FaTimes className={cart_styles.fatimes}/>
            <div className={cart_styles.content}>
                <h3>organic food</h3>
                <span className={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>$18.99</span>
            </div>
        </div>
        {cart.map((c,index) => {
            <div className={cart_styles.box}>
            <FaTimes className={cart_styles.fatimes}/>
            <div className={cart_styles.content}>
                <h3>{c.name}</h3>
                <span className={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>Rs.{c.price}</span>
            </div>
        </div>
        })}
        <h3 className={cart_styles.total}> total : <span>56.97</span> </h3>
        <Button onClick={checkout} className={cart_styles.btn}>checkout cart</Button>
    </div>: <Login/> }</>
        
    )
} 