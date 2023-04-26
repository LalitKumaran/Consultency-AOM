import {useState,useEffect} from 'react'
import shop_styles from './shop.module.css'
import axios from 'axios'
import {Container,Card,Button} from 'react-bootstrap' 

export const Shop = () => {

    const [products,setProducts] = useState([])

    const [filter,setFilter] = useState([])

    const [state,setState] =useState({"wholesale":false,"retail":false})

    const [quantity,setQuantity] = useState([])

    const load = async() => {
        await axios.get('api/product/all').then((res)=>{
            setProducts(res.data.products)
            var quant = [];
            var obj;
            res.data.products.map((p,index)=>(
                obj = {p_id:0},
                quant.push(obj)
            ))
            setQuantity(quant)
        }).catch((err)=>{console.log(err)})
    }

    const incqty = (id) => {
        
    }

    const decqty = (id) => {
        
    }

    const wholesale = () => {
        setState({"wholesale":!state.wholesale,"retail":false})
    }

    const retail = () => {
        setState({"wholesale":false,"retail":!state.retail})

    }

    useEffect( ()=>{
        load()
    })

    return (
        <>
        <Container className={shop_styles.category}>
        <Container className={shop_styles.boxcontainer}>
        <h1 className={shop_styles.title}> Our <span>Products</span> <a href="#"></a> </h1>
        </Container>
        <Container className={shop_styles.boxcontainer}>
        <Button onClick={wholesale()} className={shop_styles.btn}>WholeSale</Button>
        <Button onClick={retail()} className={shop_styles.btn}>Retail</Button>
        </Container>

        <Container className={shop_styles.boxcontainer}>
        <Card className={shop_styles.box}>
        <Card.Title><h3>Name</h3></Card.Title><br/>
        <Card.Body>
            <img src='#' ></img>
            <h3>Price</h3>
            <h3 className={shop_styles.qty}>
            <Button onClick={incqty(1)} className={shop_styles.qtybtn}>-</Button>
            <input type="text" min='0' defaultValue="1"></input>
            <Button onClick={decqty(1)} className={shop_styles.qtybtn}>+</Button>
            </h3>
            <Button className={shop_styles.btn}>Add to Cart</Button>
        </Card.Body>
        </Card>
        </Container>
        </Container>
        </>
    )
}