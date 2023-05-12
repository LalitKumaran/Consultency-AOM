import { useEffect, useState } from 'react';
import home_styles from './home.module.css';
import { Banner } from './Banner';
import { Products } from '../Products/Products';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

 

export function Home() {
  
  const [carouselList, setCarouselList] = useState([
    {
      tag1: 'fresh and organic',
      tag2: 'upto 50% off',
      img: 'assets/image/pngeggg (8).png',
    },
    {
      tag1: 'Limited Deal',
      tag2: 'upto 50% off',
      img: 'assets/image/pngegg (8).png',
    },
    {
      tag1: 'Make your food more Delicious',
      tag2: 'upto 50% off',
      img: 'assets/image/pngegg (9).png',
    },
  ]);

  const [activeCarousel, setActiveCarousel] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCarousel((activeCarousel + 1) % carouselList.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeCarousel, carouselList.length]);

  const scr = () => {
    var element = document.getElementById('prd');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={home_styles.home}>
        <div className={home_styles.slidescontainer}>
          <div className={home_styles.slide}>
            <div className={home_styles.content}>
              <span>{carouselList[activeCarousel].tag1}</span>
              <h3>{carouselList[activeCarousel].tag2}</h3>
              <a href="#" className={home_styles.btn}>
                shop now
              </a>
            </div>
            <div className={home_styles.image}>
              <img src={carouselList[activeCarousel].img} alt="" />
            </div>
          </div>
        </div>

        {/* <FaArrowRight className={home_styles.nextslide} onClick={next} /> */}
        {/* <FaArrowLeft className={home_styles.prevslide} onClick={prev}/> */}
      </div>
      <Products id="#products"/>
    </>
  );
}
