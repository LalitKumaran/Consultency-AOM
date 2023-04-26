import cart_styles from './cart.module.css'
import {useEffect,useState} from 'react'
import axios from 'axios'

export const Cart = () => {

    const [cart,setCart] = useState([])
    
    const load = async () => {
        axios.get('cart',{}).then((res)=>{
            console.log(res.products)
        }).catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        // load()
    })

    return (
        <>
        <div className={cart_styles.shopping_cart}>
        <div className={cart_styles.box}>
            {/* <i class="fas fa-times"></i> */}
            {/* <img src="image/cart-1.jpg" alt=""/> */}
            <div className={cart_styles.content}>
                <h3>organic food</h3>
                <span className={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>$18.99</span>
            </div>
        </div>
        <div className={cart_styles.box}>
            {/* <i class="fas fa-times"></i> */}
            {/* <img src="image/cart-2.jpg" alt=""/> */}
            <div className={cart_styles.content}>
                <h3>organic food</h3>
                <span classNmae={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>$18.99</span>
            </div>
        </div>
        <div className={cart_styles.box}>
            {/* <i class="fas fa-times"></i> */}
            {/* <img src="image/cart-3.jpg" alt=""/> */}
            <div className={cart_styles.content}>
                <h3>organic food</h3>
                <span className={cart_styles.quantity}>1</span>
                <span className={cart_styles.multiply}>x</span>
                <span className={cart_styles.price}>$18.99</span>
            </div>
        </div>
        <h3 className={cart_styles.total}> total : <span>56.97</span> </h3>
        <a href="#" className={cart_styles.btn}>checkout cart</a>
    </div>
        {cart.map((c,index) => {
            
        })}
        </>
    )
} 