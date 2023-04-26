import product_styles from './product.module.css'
import {useEffect,useState} from "react"
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {FaStar,FaShoppingCart,FaEye,FaHeart} from 'react-icons/fa'

export const Products = () => {

    const [products,setProducts] = useState([{"name":"","price":0}])

    const load =  async () => {
        await axios.get('product/all').then((res)=>{
            setProducts(res.products);
        }).catch((err)=>{console.log(err);})
    }

    useEffect( ()=>{
        load()
    })

return (
    <>
    {/* <div className={product_styles.heading}>
    <h1>our shop</h1>
    <p><NavLink to='/'>Home</NavLink> shop </p>
    </div> */}

        <div className={product_styles.category}>

            <h1 className={product_styles.title}> our <span>category</span> <a href="#"></a> </h1>

            <div className={product_styles.boxcontainer}>

                <a href="#" className={product_styles.box}>
                    <img src="assets/image/pngegg 0(8).png" alt=""/>
                    <h3>wholeSale</h3>
                </a>

                <a href="#" className={product_styles.box}>
                    <img src="assets/image/pngegg (8).png" alt=""/>
                    <h3>Retail</h3>
                </a>
            </div>

        </div>

<div className={product_styles.products}>

    <h1 className={product_styles.title}> our <span>products</span> <a href="#"></a> </h1>

    <div className={product_styles.boxcontainer}>
    { products.map((p,index) =>

        <div className={product_styles.box}>
            <div className={product_styles.icons}>
                <a href="#"><FaShoppingCart/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaEye/></a>
            </div>
            <div className={product_styles.image}>
                <img src="https://media.istockphoto.com/id/862422514/photo/coconut-and-oil-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=hGMurlCn_XfshiG6t_XLqoCazLZYQ0d-MzfH7CDdHwU=" alt=""/>
            </div>
            <div className={product_styles.content}>
                <h3>coconut oil{p.name}</h3>
                <div className={product_styles.price}>Rs.{p.price}/ltr</div>
                <div className={product_styles.stars}>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                </div>
            </div>
        </div>
    )}

        <div className={product_styles.box}>
            <div className={product_styles.icons}>
                <a href="#"><FaShoppingCart/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaEye/></a>
            </div>
            <div className={product_styles.image}>
                <img src="https://media.istockphoto.com/id/862422514/photo/coconut-and-oil-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=hGMurlCn_XfshiG6t_XLqoCazLZYQ0d-MzfH7CDdHwU=" alt=""/>
            </div>
            <div className={product_styles.content}>
                <h3>coconut oil</h3>
                <div className={product_styles.price}>Rs.200/ltr</div>
                <div className={product_styles.stars}>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                </div>
            </div>
        </div>

        <div className={product_styles.box}>
            <div className={product_styles.icons}>
                <a href="#"><FaShoppingCart/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaEye/></a>
            </div>
            <div className={product_styles.image}>
                <img src="https://media.istockphoto.com/id/1152319133/photo/thai-fish-sauce.jpg?s=612x612&w=0&k=20&c=lmDzH_pJrN4G6ceSPDCckk9eZLdKJnqcnNqzIkbuRes=" alt=""/>
            </div>
            <div className={product_styles.content}>
                <h3>gingelly oil</h3>
                <div className={product_styles.price}>Rs.200/ltr</div>
                <div className={product_styles.stars}>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                </div>
            </div>
        </div>

    </div>
    </div>
    </>
)
}