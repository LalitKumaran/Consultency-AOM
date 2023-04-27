import cart_styles from './cart.module.css'
import {useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
import {FaTimes} from 'react-icons/fa'
import {Login} from '../Login'
import axios from 'axios'

export const Cart = () => {

    const [cart,setCart] = useState([])

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const [carttotal,setCarttotal] = useState(0)
    
    const load = async () => {
        const data = {uid:user.email}
        console.log(data)
        await axios.get('/api/cart/user/find',data).then((res)=>{
            console.log(res.data)
            setCart(res.data.usercart.products)
            var total = 0;
            res.data.cart.products.map((c,index)=>{
                total += c.price
            })
            setCarttotal(total)
        }).catch((err)=>{console.log(err)})
    }

    const removeItem = async(productid)=>{
        const data = {uid:user.email,pid:productid}
        console.log(data)
        await axios.put('/api/cart/user/remove',data).then((res)=>{
            console.log(res.data)
            setCart(res.data.updatedCart.products)
        }).catch((err)=>{console.log(err)})
    }

    const checkout = () => {
        //
    }

    useEffect(()=>{
        load()
    },[])

    return (
        <>
        {user?
        <div className={`${cart_styles.shopping_cart} active`}>
        {/* <div className={cart_styles.box}>
            <FaTimes className={cart_styles.fatimes}/>
            <div className={cart_styles.content}>
                <h3>organic food</h3>
                <span className={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>$18.99</span>
            </div>
        </div> */}
        {cart.map((c,index) => 
            <div key={c._id} className={cart_styles.box}>
            <FaTimes onClick={()=>removeItem(c._id.toString())} className={cart_styles.fatimes}/>
            <div className={cart_styles.content}>
                <h3>{c.name}</h3>
                <span className={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>Rs.{c.price}</span>
            </div>
        </div>
        )}
        <h3 className={cart_styles.total}> total : <span>{carttotal}</span> </h3>
        <Button onClick={checkout} className={cart_styles.btn}>checkout cart</Button>
    </div>: <Login/> }</>
        
    )
} 