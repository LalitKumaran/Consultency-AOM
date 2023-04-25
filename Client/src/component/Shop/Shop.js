import shop_styles from './shop.module.css'
import {NavLink} from 'react-router-dom'
import {FaStar,FaShoppingCart,FaEye,FaHeart} from 'react-icons/fa'

export const Shop = () => {

return (
    <>
    <div className={shop_styles.heading}>
    <h1>our shop</h1>
    <p><NavLink to='/'>Home</NavLink> shop </p>
    </div>

<div className={shop_styles.category}>

    <h1 className={shop_styles.title}> our <span>category</span> <a href="#"></a> </h1>

    <div className={shop_styles.boxcontainer}>

        <a href="#" className={shop_styles.box}>
            <img src="assets/image/pngegg 0(8).png" alt=""/>
            <h3>wholeSale</h3>
        </a>

        <a href="#" className={shop_styles.box}>
            <img src="assets/image/pngegg (8).png" alt=""/>
            <h3>Retail</h3>
        </a>
        
{/* <!-- 
        <a href="#" class="box">
            <img src="image/cat-3.png" alt="">
            <h3>organic spices</h3>
        </a> --> */}
{/* 
        <!-- <a href="#" class="box">
            <img src="image/cat-4.png" alt="">
            <h3>fresh meat</h3>
        </a>

        <a href="#" class="box">
            <img src="image/cat-5.png" alt="">
            <h3>organic wheat</h3>
        </a> --> */}

    </div>

</div>

<div className={shop_styles.products}>

    <h1 className={shop_styles.title}> our <span>products</span> <a href="#"></a> </h1>

    <div className={shop_styles.boxcontainer}>

        <div className={shop_styles.box}>
            <div className={shop_styles.icons}>
                <a href="#"><FaShoppingCart/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaEye/></a>
            </div>
            <div className={shop_styles.icons}>
                <img src="/assets/image/pngegg (8).png" alt=""/>
            </div>
            <div className={shop_styles.content}>
                <h3>Refined oil</h3>
                <div className={shop_styles.price}>Rs.200/ltr</div>
                <div className={shop_styles.stars}>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                </div>
            </div>
        </div>

        <div className={shop_styles.box}>
            <div className={shop_styles.icons}>
                <a href="#"><FaShoppingCart/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaEye/></a>
            </div>
            <div className={shop_styles.image}>
                <img src="https://media.istockphoto.com/id/862422514/photo/coconut-and-oil-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=hGMurlCn_XfshiG6t_XLqoCazLZYQ0d-MzfH7CDdHwU=" alt=""/>
            </div>
            <div className={shop_styles.content}>
                <h3>coconut oil</h3>
                <div className={shop_styles.price}>Rs.200/ltr</div>
                <div className={shop_styles.stars}>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                </div>
            </div>
        </div>

        <div className={shop_styles.box}>
            <div className={shop_styles.icons}>
                <a href="#"><FaShoppingCart/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaEye/></a>
            </div>
            <div className={shop_styles.image}>
                <img src="https://media.istockphoto.com/id/1152319133/photo/thai-fish-sauce.jpg?s=612x612&w=0&k=20&c=lmDzH_pJrN4G6ceSPDCckk9eZLdKJnqcnNqzIkbuRes=" alt=""/>
            </div>
            <div className={shop_styles.content}>
                <h3>gingelly oil</h3>
                <div className={shop_styles.price}>Rs.200/ltr</div>
                <div className={shop_styles.stars}>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                </div>
            </div>
        </div>

        {/* <!-- <div class="box">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="image/product-4.jpg" alt="">
            </div>
            <div class="content">
                <h3>organic food</h3>
                <div class="price">$18.99</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="image/product-5.jpg" alt="">
            </div>
            <div class="content">
                <h3>organic food</h3>
                <div class="price">$18.99</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="image/product-6.jpg" alt="">
            </div>
            <div class="content">
                <h3>organic food</h3>
                <div class="price">$18.99</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="image/product-7.jpg" alt="">
            </div>
            <div class="content">
                <h3>organic food</h3>
                <div class="price">$18.99</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="image/product-8.jpg" alt="">
            </div>
            <div class="content">
                <h3>organic food</h3>
                <div class="price">$18.99</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div> --> */}

    </div>
    </div>
    </>
)
}