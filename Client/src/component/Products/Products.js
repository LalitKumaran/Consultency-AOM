import product_styles from './product.module.css'
import {useEffect,useState} from "react"
import axios from 'axios'
import {Card} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {FaStar,FaShoppingCart,FaEye,FaHeart} from 'react-icons/fa'
// import Testimonial from './Testimonial'
export const Products = () => {

    const [products,setProducts] = useState([{"name":"","price":0}])

    const load =  async () => {
        await axios.get('product/all').then((res)=>{
            setProducts(res.products);
        }).catch((err)=>{console.log(err);})
    }

    useEffect( ()=>{
        load()
    },[])

return (
    <>
    
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
        <div className={product_styles.product}>
        <h1 className={product_styles.title}> our <span>Products</span> <a href="#"></a> </h1>
        <Card className={product_styles.boxcontainer}>
            <div className={product_styles.image}>
                <img src="https://plus.unsplash.com/premium_photo-1664391616054-1671f1b7f75d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=478&q=80" alt=""/>
            </div>
            <div className={product_styles.content}>
                {/* <span>welcome to our shop</span> */}
                <h3>Seasame Oil</h3>
                <p>Sesame oil, known for its distinct nutty flavor, is a versatile cooking oil that's perfect for enhancing the taste of your dishes. Our premium sesame oil is extracted from high-quality sesame seeds, using traditional methods to preserve its natural goodness. With its high smoke point and rich aroma, our sesame oil is ideal for stir-frying, sautéing, and even as a salad dressing. Add a dash of our sesame oil to your dishes and enjoy a burst of flavor that will tantalize your taste buds.</p>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p> */}
                <a href="#" className={product_styles.btn}>read more</a>
            </div>
        </Card>
        <Card className={product_styles.boxcontainer}>
            <div className={product_styles.content}>
                {/* <span>welcome to our shop</span> */}
                <h3>coconut oil</h3>
                <p>Our coconut oil is a versatile and natural product that can be used in a variety of ways. Made from the flesh of mature coconuts, it's rich in healthy fats that are essential for a balanced diet. With its delicate flavor and aroma, our coconut oil is perfect for cooking, baking, and even as a moisturizer for your skin and hair. Whether you're making a curry or a smoothie, our coconut oil will add a delicious tropical twist to your recipes.</p>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p> */}
                <a href="#" className={product_styles.btn}>read more</a>
            </div>
            <div className={product_styles.image}>
                <img src="https://images.unsplash.com/photo-1588413336009-1f4219f2d5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
            </div>
        </Card>
        <Card className={product_styles.boxcontainer}>
            <div className={product_styles.image}>
                <img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80" alt=""/>
            </div>
            <div className={product_styles.content}>
                {/* <span>welcome to our shop</span> */}
                <h3>refined Oil</h3>
                <p>Our refined oil is a pure and high-quality cooking oil that's perfect for everyday use. Extracted from high-quality seeds, it's processed to remove any impurities, ensuring a clean and healthy oil. With its neutral taste and high smoke point, our refined oil is perfect for frying, baking, and sautéing. Our refined oil is a staple in every kitchen, providing a reliable and versatile oil that can be used in a variety of dishes.</p>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p> */}
                <a href="#" className={product_styles.btn}>read more</a>
            </div>
        </Card>
        
        </div>
        
            
        
        
{/* <div className={product_styles.products}>

    <h1 className={product_styles.title}> our <span>products</span> <a href="#"></a> </h1>

    <div className={product_styles.boxcontainer}>

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
    </div> */}
    </>
)
}