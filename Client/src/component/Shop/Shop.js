import {useState,useEffect,useRef} from 'react'
import shop_styles from './shop.module.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import {Container,Card,Button} from 'react-bootstrap' 
import {FaEdit} from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'
import { UpdateProduct } from '../Admin/UpdateProduct'
import { useNavigate,Link } from 'react-router-dom'
import Dialog from "../Admin/Dialog";
export const Shop = () => {

    const Navigate=useNavigate()

    const [products,setProducts] = useState([])

    const [filter,setFilter] = useState([])

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

    async function handleDelete(pid){
        console.log("ddfd",pid)
        // const del = window.confirm("Are you sure to delete the product?")
        // if(del){
            await axios.put(`/api/product/delete/${pid}`).then((res)=>{
                console.log("response",res)
                toast.success(res.message)
                load()
            }).catch((err)=>{console.log(err)})
        // }
        
    };

    // const [state,setState] =useState({"wholesale":false,"retail":false})

    // const [quantity,setQuantity] = useState({})

    const load = async() => {
        await axios.get('api/product/all').then((res)=>{
            console.log("response",res)
            setProducts(res.data.products)
            setFilter(res.data.products)
            // var quant = {};
            // res.data.products.map((p,index)=>(
            //     quant[p._id] = 1
            // ))
            // setQuantity(quant)
        }).catch((err)=>{console.log(err)})
    }

    const addtocart = async(pid) => {
        if(!user){
            toast.error("User not found")
        }
        else{
            console.log(user.email,pid)
            await axios.post('/api/cart/new',{uid:user.email,pid:pid}).then((res)=>{
                console.log(res)
                toast.success(res.data.message)
            }).catch((err)=>{console.log(err)})
        }     
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
    },[])

    useEffect(()=>{
        console.log("products",products)
        console.log("filter",products)
    })
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
      },[])

    return (
        <>
        <Container className={shop_styles.category}>
        <Container className={shop_styles.boxcontainer}>
        <h1 className={shop_styles.title}> Our <span>Products</span> <a href="#"></a> </h1>
        </Container>
        {/* <Container className={shop_styles.boxcontainer}>
        <Button className={shop_styles.btn}>WholeSale</Button>
        <Button className={shop_styles.btn}>Retail</Button>
        </Container> */}

        <Container className={shop_styles.boxcontainer}>
            {filter.map((p,index)=>
                <Card key={index} className={shop_styles.box}>
                    
                    {user &&user.role===1 ? <><FaEdit size={30} className={shop_styles.edit} onClick={()=>{
                        Navigate("/admin/update",{state:{product:p}})
                    }}/> 
                    <MdDeleteForever className={shop_styles.delete} size={30} onClick={()=>handleDelete(p._id)}/></>:<></>}
                <Card.Title><h3>{p.name}</h3></Card.Title>
                <h6>{p.description}</h6>
                <Card.Body>
                    <img src={p.image} alt=""></img>
                    <h3>Rs.{p.price}</h3>
                    {/* <h3 className={shop_styles.qty}>
                    <Button className={shop_styles.qtybtn}>-</Button>
                    <input type="text" min='0' defaultValue="1"></input>
                    <Button className={shop_styles.qtybtn}>+</Button>
                    </h3> */console.log(p._id)}
                    <Button onClick={()=>addtocart(p._id.toString())} className={shop_styles.btn}>Add to Cart</Button>
                </Card.Body>
                </Card>
            )}
        </Container>
        </Container>
        </>
    )
}