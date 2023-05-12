import history_styles from '../History/history.module.css'
import {useState,useEffect} from 'react';
import {Container,Card,Button,Row} from 'react-bootstrap' 
import axios from 'axios';

export const History = () => {

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const [orders,setOrders] = useState([])

    const load = async () => {
        await axios.get(`/api/cart/user/history/${user.email}`).then((res)=>{
            console.log(res.data.history.history)
            
            setOrders(res.data.history.history)
        }).catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        if(user){
            load()
        }
    },[])

    return (
        <>
        <Container className={history_styles.category}>
        <Container className={history_styles.boxcontainer}>
        <h1 className={history_styles.title}> My <span>Orders</span> <a href="#"></a></h1>
        </Container>
        <Container className={history_styles.boxcontainer}>
            {orders.map((cart,index)=>
                <Row key={index} className={history_styles.box}>
                <div className={`${history_styles.cart} active`}>
                    {cart.map((c,index) => 
                        <div key={c._id} className={history_styles.cartbox}>
                            <div className={history_styles.cartcontent}>
                                <h3>{c.name}</h3>
                                {/* <img src={c.image} alt=""></img> */}
                                <span className={history_styles.quantity}>1</span>
                                <span className={history_styles.multiply}>x</span>
                                <span className={history_styles.price}>Rs.{c.price}</span>
                            </div>
                        </div>
                    )}
                <h3 className={history_styles.total}> Amount : <span>Rs.380</span> </h3>
                </div>
                 </Row>
            )}
        </Container>
        </Container>
        </>
    )
}