import banner_styles from './banner.module.css'
export const Banner = () => {
    
    return (
    <div className={banner_styles.bannercontainer}>

<div className={banner_styles.banner}>
    <img src="/assets/image/pngwing.com.png" alt=""/>
    <div className={banner_styles.content}>
        <span>limited sales</span>
        <h3>upto 50% off</h3>
        <a href="#" className={banner_styles.btn}>shop now</a>
    </div>
</div>

<div className={banner_styles.banner}>
    <img src="/assets/image/ppp.png" alt=""/>
    <div className={banner_styles.content}>
        <span>limited sales</span>
        <h3>upto 50% off</h3>
        <a href="#" className={banner_styles.btn}>shop now</a>
    </div>
</div>

<div className={banner_styles.banner}>
    <img src="assets/image/pngwingg.com" alt=""/>
    <div className={banner_styles.content}>
        <span>limited sales</span>
        <h3>upto 50% off</h3>
        <a href="#" className={banner_styles.btn}>shop now</a>
    </div>
</div>

</div>)
}