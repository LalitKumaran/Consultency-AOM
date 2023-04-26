import about_styles from './about.module.css'
import {NavLink} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {FaEye,FaHeart,FaShareAlt} from 'react-icons/fa'

export const About = () => {
    return (
        <>
        
    <div className={about_styles.about}>
    <h1 className={about_styles.title}> our <span>Shop</span> </h1>
    

    <div className={about_styles.boxcontainer}>

    <div className={about_styles.image}>
        <img src="/assets/image/pngegg (8).png" alt=""/>
    </div>

    <div className={about_styles.content}>
        <span>welcome to our shop</span>
        <h3>fresh and organic groceries</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.</p>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p> */}
        <a href="#" className={about_styles.btn}>read more</a>
    </div>
    </div>
</div>

<div className={about_styles.gallery}>

    <h1 className={about_styles.title}> our <span>gallery</span> <a href="#">view all </a> </h1>

    <div className={about_styles.boxcontainer}>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1405436764/photo/making-internal-gear-in-part-with-preshave-shaper-cutter.jpg?b=1&s=170667a&w=0&k=20&c=36Zyt_a4nALpP7x4mQSLcGJRck4gTkMvP3_jeUWh2Cs=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a>
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1358803271/photo/olive-oil-factory-olive-production-tank-food-automation.jpg?s=612x612&w=0&k=20&c=VkcPKFdiAO1CiRnQj1D2nMSTtAYjZEszzvcCzVQZRe0=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a>
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1394758644/photo/processing-of-copper-detail-sockets-with-milling-machine.jpg?s=612x612&w=0&k=20&c=L2PUnc4n9_g_9JCopWJqn_bv2rzDjC2SSghtTW5OV2Q=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a>
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1299579661/photo/roasted-sunflower-seeds-equipment-at-modern-factory.jpg?s=612x612&w=0&k=20&c=O4e-OZxtrwHy9C4Xd0rC7WnuSqW35Kvmft4RbQ4xDBI=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a>
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1219863533/photo/extra-virgin-olive-oil-extraction-in-greece.jpg?s=612x612&w=0&k=20&c=zHOWFT87Eo1vjoUEZq_43Vg4JJfq-Ilfr8QBoqzlgXw=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a>
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1298090290/photo/roasted-sunflower-seeds-equipment-at-modern-factory.jpg?s=612x612&w=0&k=20&c=771H51ayfXcY71yvlK025T1SMMB6wnyy8iR2aHfw_YE=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a>
            </div>
        </div>

    </div>

</div>
        </>
    )
}