import React from 'react'
import footer_styles from './footer.module.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {} from 'react-bootstrap'
import {FaArrowRight,FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
export function Footer(){
    const navigate = useNavigate()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        
        <div className={footer_styles.footer}>

            <div className={footer_styles.boxcontainer}>

                <div className={footer_styles.box}>
                    <h3>quick links</h3>
                    <a href="/"> <i><FaArrowRight/></i> Home</a>
                    <a href="/shop"> <i><FaArrowRight/></i> Shop</a>
                    <a href="/about"> <i><FaArrowRight/></i> About</a>
                    <a href="/contact"> <i><FaArrowRight/></i> Contact</a>
                </div>

                <div className={footer_styles.box}>
                    <h3>extra links</h3>
                    {user?
                    <><a href="/history"> <i><FaArrowRight/></i> My orders </a></>:<></>}
                    <a href="/privacypolicy"> <i><FaArrowRight/></i> Privacy Policy </a>
                    <a href="/termsofuse"> <i><FaArrowRight/></i> Terms of use </a>
                </div>

                <div className={footer_styles.box}>
                    <h3>follow us</h3>
                    <a href="/facebook"> <i><FaFacebook/></i> Facebook </a>
                    <a href="/instagram"> <i><FaInstagram/></i> Instagram</a>
                    <a href="/twitter"> <i><FaTwitter/></i> Twitter </a>
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