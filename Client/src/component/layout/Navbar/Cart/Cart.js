import cart_styles from './cart.module.css'
import {useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
import {FaTimes} from 'react-icons/fa'
import axios from 'axios'

export const Cart = () => {

    const [cart,setCart] = useState([])
    
    const load = async () => {
        axios.get('cart',{}).then((res)=>{
            console.log(res.products)
        }).catch((err)=>{console.log(err)})
    }

    const checkout = () => {
        //
    }

    useEffect(()=>{
        // load()
    })

    return (
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
        <h3 className={cart_styles.total}> total : <span>56.97</span> </h3>
        <Button onClick={checkout} className={cart_styles.btn}>checkout cart</Button>
        {cart.map((c,index) => {
            
        })}
    </div>
        
    )
} 