import React from 'react'
import footer_styles from './footer.module.css'
import {} from 'react-bootstrap'
import {FaArrowRight,FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
export function Footer(){
    return (
        <div className={footer_styles.footer}>

            <div className={footer_styles.boxcontainer}>

                <div className={footer_styles.box}>
                    <h3>quick links</h3>
                    <a href="home.html"> <i><FaArrowRight/></i> Home</a>
                    <a href="shop.html"> <i><FaArrowRight/></i> Shop</a>
                    <a href="about.html"> <i><FaArrowRight/></i> About</a>
                    <a href="contact.html"> <i><FaArrowRight/></i> Contact</a>
                </div>

                <div className={footer_styles.box}>
                    <h3>extra links</h3>
                    <a href="#"> <i><FaArrowRight/></i> My order </a>
                    <a href="#"> <i><FaArrowRight/></i> My favorite </a>
                    {/* <a href="#"> <i><FaArrowRight/></i> My wishlist </a> */}
                    <a href="#"> <i><FaArrowRight/></i> My account </a>
                    <a href="#"> <i><FaArrowRight/></i> Terms or use </a>
                </div>

                <div className={footer_styles.box}>
                    <h3>follow us</h3>
                    <a href="#"> <i><FaFacebook/></i> Facebook </a>
                    <a href="#"> <i><FaInstagram/></i> Instagram</a>
                    <a href="#"> <i><FaTwitter/></i> Twitter </a>
                </div>

                <div className={footer_styles.box}>
                    <h3>Newsletter</h3>
                    <p>Subscribe for latest updates</p>
                    <form>
                        <input type="email" placeholder="Enter your email"/>
                        <input type="submit" value="Subscribe" className={footer_styles.btn}/>
                    </form>
                    <img src="/assets/image/payment.png" class="payment" alt=""/>
                </div>

            </div>
        </div>
    )
}