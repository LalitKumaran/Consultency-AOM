import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import payment_styles from './payment.module.css'
import {useLocation} from 'react-router-dom';
import axios from 'axios'

 function Payment() {
    const location = useLocation()
    console.log("Amount",location.state.amount)
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
                        // axios.put('api/cart/user/checkout',{})
                    });
            
                }}
            />
        </PayPalScriptProvider>
        </div>
    );
}
export default Payment;