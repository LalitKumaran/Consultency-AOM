import {useEffect, useState,useRef} from 'react'
import home_styles from './home.module.css'
// import {} from 'react-bootstrap'
import {Banner} from './Banner'
import {Products} from '../Products/Products'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
// import { Carousel } from 'react-responsive-carousel';
export function Home(){

    const [carouselList,setCarouselList] = useState([{'tag1':"fresh and organic",'tag2':"upto 50% off","img":"assets/image/pngeggg (8).png"},
    {'tag1':"fresh and organic",'tag2':"upto 50% off","img":"assets/image/pngegg (8).png"},
    {'tag1':"fresh and organic",'tag2':"upto 50% off","img":"assets/image/pngegg (9).png"}])

    const scr = () => {
        var element = document.getElementById('prd')
        element.scrollIntoView({behavior:"smooth"});
    }
    
    const [activeCarousel,setActiveCarousel] = useState(0) 
    const next = () => {
        setActiveCarousel((activeCarousel + 1) % carouselList.length);
    }

    const prev = () => {
        setActiveCarousel((activeCarousel + 1) % carouselList.length);
    }
    var[a,seta]=useState(0);
    // var[b,setb]=useState(0);
    useEffect(()=>
    {
        setInterval(function() {
            seta(a++);
            if(a>2){
                seta(a/3);
            }else{
                seta(a);
            }
           
            if(a==3)
            {
                seta(a=0)
            }
        },7000)
    },a)
    
    

    console.log(a)
    return (
        <>
        <div className={home_styles.home}>

        <div className={home_styles.slidescontainer}>
            <div className={home_styles.slide}>
                <div className={home_styles.content}>
                    <span>{carouselList[a].tag1}</span>
                    <h3>upto 50% off</h3>
                    <a href="#" className={home_styles.btn}>shop now</a>
                </div>
                <div className={home_styles.image}>
                    <img src={carouselList[a].img}alt=""/>
                </div>
            </div>
            </div> 
        

        {/* <FaArrowRight  className={home_styles.nextslide} onClick={next} /> */}
        {/* <FaArrowLeft className={home_styles.prevslide} onClick={prev}/> */}
        </div>
        <Products/>
    </>
    )
}