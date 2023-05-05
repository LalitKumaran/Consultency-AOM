import React from 'react'
import contact_styles from './contact.module.css'
import {Container} from 'react-bootstrap'
import {FaPhone,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'
export function Contact(){
    return (
    <div className={contact_styles.contact}>
    <Container className={contact_styles.boxcontainer}>
        <h1 className={contact_styles.title}> Contact <span>Us </span></h1>
    </Container>

<div className={contact_styles.contact}>

    <div className={contact_styles.iconscontainer}>

        <div className={contact_styles.icons}>
            <i><FaPhone/></i>
            <h3>our number</h3>
            <p>+91 987654321</p>
            <p>+111-222-3333</p>
        </div>

        <div className={contact_styles.icons}>
            <i><FaEnvelope/></i>
            <h3>our email</h3>
            <p>arunamills@gmail.com</p>
            <p>arunaoilmill@gmail.com</p>
        </div>

        <div className={contact_styles.icons}>
            <i><FaMapMarkerAlt/></i>
            <h3>our address</h3>
            <p>Erode, TamilNadu, India - 638002</p>
        </div>

    </div>

    <div className={contact_styles.row}>

        <form>
            <h3>get in touch</h3>
            <div className={contact_styles.inputBox}>
                <input type="text" placeholder="enter your name" className={contact_styles.box}/>
                <input type="email" placeholder="enter your email" className={contact_styles.box}/>
            </div>
            <div className={contact_styles.inputBox}>
                <input type="number" placeholder="enter your number" className={contact_styles.box}/>
                <input type="text" placeholder="enter your subject" className={contact_styles.box}/>
            </div>
            <textarea placeholder="your message" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className={contact_styles.btn}/>
        </form>

        <iframe className={contact_styles.map}  allowfullscreen="" loading="lazy"></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.657374356943!2d77.69743591447121!3d11.359717291927344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9695a39160b07%3A0x8dbe2d60d40dbbda!2sARUNA%20OIL%20MILL!5e0!3m2!1sen!2sin!4v1679565799306!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8136990222456!2d77.71238272095333!3d11.348314366138949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f372bceaabd%3A0x721207df225e38c6!2sAruna%20Oil%20Mill!5e0!3m2!1sen!2sin!4v1679565982567!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

    </div>

</div>
        </div>
    )
}