import {useState,useEffect} from 'react'
import shop_styles from './shop.module.css'
import axios from 'axios'
import {Container,Card,Button} from 'react-bootstrap' 

export const Shop = () => {

    const [products,setProducts] = useState([])

    const [filter,setFilter] = useState([])

    // const [state,setState] =useState({"wholesale":false,"retail":false})

    // const [quantity,setQuantity] = useState({})

    const load = async() => {
        await axios.get('api/product/all').then((res)=>{
            setProducts(res.data.products)
            setFilter(res.data.products)
            // var quant = {};
            // res.data.products.map((p,index)=>(
            //     quant[p._id] = 1
            // ))
            // setQuantity(quant)
        }).catch((err)=>{console.log(err)})
    }

    // const incqty = (id) => {
    //     const newQuant = [...quantity];
    //     newQuant[id] += 1;
    //     setQuantity(newQuant);
    // }

    // const decqty = (id) => {
    //     const newQuant = [...quantity];
    //     newQuant[id] -= 1;
    //     setQuantity(newQuant);
    // }

    useEffect( ()=>{
        load()
        console.log(products)
    },[])

    return (
        <>
        <Button onClick={load} className={shop_styles.btn}>Click</Button>
        <Container className={shop_styles.category}>
        <Container className={shop_styles.boxcontainer}>
        <h1 className={shop_styles.title}> Our <span>Products</span> <a href="#"></a> </h1>
        </Container>
        <Container className={shop_styles.boxcontainer}>
        <Button className={shop_styles.btn}>WholeSale</Button>
        <Button className={shop_styles.btn}>Retail</Button>
        </Container>

        <Container className={shop_styles.boxcontainer}>
            {filter.map((p,index)=>{
                <Card key={index} className={shop_styles.box}>
                <Card.Title><h3>{p.name}</h3></Card.Title><br/>
                <Card.Body>
                    <img src='#' ></img>
                    <h3>{p.price}/Litre</h3>
                    <h3 className={shop_styles.qty}>
                    <Button className={shop_styles.qtybtn}>-</Button>
                    <input type="text" min='0' defaultValue="1"></input>
                    <Button className={shop_styles.qtybtn}>+</Button>
                    </h3>
                    <Button className={shop_styles.btn}>Add to Cart</Button>
                </Card.Body>
                </Card>
            })}
        </Container>
        </Container>
        </>
    )
}