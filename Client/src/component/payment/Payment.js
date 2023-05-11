import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import payment_styles from './payment.module.css'
import { useLocation, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 function Payment() {
    const [cart,setCart] = useState([])
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const Navigate=useNavigate()
    const location = useLocation()
  const checkout = async() => {
        const data = {uid:user.email}
        console.log(data)
        await axios.put('/api/cart/user/checkout',data).then((res)=>{
            console.log("client",res.data)
            setCart(res.data.updatedCart.products)
            //  window.location.reload()
            Navigate("/")
    

        }).catch((err)=>{console.log(err)})
    }
useEffect(()=>
{
    setUser(JSON.parse(localStorage.getItem('user')))
    
},[])
    return (
        <div className={payment_styles.container} >
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value:location.state.amount,
                                    currency: "INR"
                                },
                            },
                        ],
                    });
                }}
                
                onApprove= {(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        checkout();

                        // axios.put('api/cart/user/checkout',{})
                    });
            
                }}
            />
        </PayPalScriptProvider>
        </div>
    );
}
export default Payment;