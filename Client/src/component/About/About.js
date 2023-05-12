import about_styles from './about.module.css'
import {NavLink} from 'react-router-dom'
import {Container,Col,Row} from 'react-bootstrap'
import {FaEye,FaHeart,FaShareAlt} from 'react-icons/fa'
import logo from '../../images/logo1.gif'
import contact_styles from '../Contact/contact.module.css'

export const About = () => {
    return (
        <>
        
    <div className={about_styles.about}>
    <h1 className={about_styles.title}> our <span>Shop</span> </h1>
     
 <div className={about_styles.image}>
        <img src={logo} alt=""/> 
    <div className={about_styles.boxcontainer}>
</div>
    
    </div> 

    <div className={about_styles.content}>
        <span>welcome to our shop</span>
        {/* <h3>fresh and organic groceries</h3> */}
        <p>Aruna Oil Mill is a renowned oil production company located in Erode, Tamil Nadu. Established in 1990, the company has been producing high-quality coconut, sesame, and refined oil for over three decades. The company is known for its commitment to quality and customer satisfaction, making it a popular choice among consumers.

The production process at Aruna Oil Mill is highly sophisticated and efficient. For coconut oil production, the company uses the traditional cold-pressed method, which involves grinding the fresh coconut meat and then pressing it to extract the oil. This method ensures that the oil retains its natural nutrients and flavor. The company sources the best quality coconuts from local farmers to ensure that the final product is of the highest quality.

For sesame oil production, Aruna Oil Mill uses the traditional wooden churner method, which involves roasting the sesame seeds and then grinding them into a paste using a wooden churner. The paste is then pressed to extract the oil, which is carefully filtered and bottled. This method of production ensures that the oil retains its distinctive nutty flavor and aroma.

For refined oil production, the company uses a modern refining process that involves filtering and bleaching the oil to remove any impurities and improve its stability. The refined oil is then carefully packaged to maintain its freshness and quality.

One of the key reasons for the success of Aruna Oil Mill is its focus on quality and customer satisfaction. The company sources the best quality raw materials and uses state-of-the-art production techniques to ensure that its products are of the highest quality. The company also has a dedicated quality control team that monitors the production process at every stage to ensure that the final product meets the highest standards.

Over the years, Aruna Oil Mill has built a strong reputation for its quality products and excellent customer service. The company has a large customer base both in India and overseas, and its products are known for their superior quality and flavor. The company also has a strong distribution network, which ensures that its products reach customers in a timely and efficient manner.

In conclusion, Aruna Oil Mill is a leading oil production company that has been producing high-quality coconut, sesame, and refined oil for over three decades. The company's focus on quality and customer satisfaction has helped it build a strong reputation and a loyal customer base. With its commitment to innovation and excellence, Aruna Oil Mill is poised for continued success in the years to come.
Aruna Oil Mill not only produces high-quality coconut, sesame, and refined oils but also offers wholesale dealing to businesses. The company has a wide network of distributors and suppliers, making it easier for them to supply their products to various parts of the country. Aruna Oil Mill understands the importance of timely delivery and has established a smooth supply chain process to ensure their products reach their customers on time.

Wholesale buyers can order large quantities of oils directly from Aruna Oil Mill at competitive prices. The company offers flexible pricing options to suit the needs of different businesses. They also have a dedicated team of customer service professionals who provide excellent support and assist with any queries.

Aruna Oil Mill's commitment to quality is evident in their production process and product packaging. The oils are carefully extracted and processed under strict quality control measures to ensure consistency and purity. The company uses modern machinery and technology to improve efficiency and quality while maintaining traditional methods of oil production.

Furthermore, Aruna Oil Mill takes sustainability seriously and ensures that their production processes are environmentally friendly. They use eco-friendly methods of waste disposal and energy conservation measures to reduce their carbon footprint.

In conclusion, Aruna Oil Mill has been producing high-quality coconut, sesame, and refined oils for over three decades and has established itself as a trusted brand in the market. Their commitment to quality, sustainability, and excellent customer service has helped them to expand their reach and offer wholesale dealing to businesses.</p>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p> */}
        <a href="#" className={about_styles.btn}>read more</a>
    </div>
    </div>
{/* </div> */}

<div className={about_styles.gallery}>

    <h1 className={about_styles.title}> our <span>gallery</span> <a href="#">view all </a> </h1>

    <div className={about_styles.boxcontainer}>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1405436764/photo/making-internal-gear-in-part-with-preshave-shaper-cutter.jpg?b=1&s=170667a&w=0&k=20&c=36Zyt_a4nALpP7x4mQSLcGJRck4gTkMvP3_jeUWh2Cs=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                {/* <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a> */}
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1358803271/photo/olive-oil-factory-olive-production-tank-food-automation.jpg?s=612x612&w=0&k=20&c=VkcPKFdiAO1CiRnQj1D2nMSTtAYjZEszzvcCzVQZRe0=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                {/* <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a> */}
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1394758644/photo/processing-of-copper-detail-sockets-with-milling-machine.jpg?s=612x612&w=0&k=20&c=L2PUnc4n9_g_9JCopWJqn_bv2rzDjC2SSghtTW5OV2Q=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                {/* <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a> */}
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1299579661/photo/roasted-sunflower-seeds-equipment-at-modern-factory.jpg?s=612x612&w=0&k=20&c=O4e-OZxtrwHy9C4Xd0rC7WnuSqW35Kvmft4RbQ4xDBI=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                {/* <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a> */}
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1219863533/photo/extra-virgin-olive-oil-extraction-in-greece.jpg?s=612x612&w=0&k=20&c=zHOWFT87Eo1vjoUEZq_43Vg4JJfq-Ilfr8QBoqzlgXw=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                {/* <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a> */}
            </div>
        </div>

        <div className={about_styles.box}>
            <img src="https://media.istockphoto.com/id/1298090290/photo/roasted-sunflower-seeds-equipment-at-modern-factory.jpg?s=612x612&w=0&k=20&c=771H51ayfXcY71yvlK025T1SMMB6wnyy8iR2aHfw_YE=" alt=""/>
            <div className={about_styles.icons}>
                <a href="#"><FaEye/></a>
                {/* <a href="#"><FaHeart/></a>
                <a href="#"><FaShareAlt/></a> */}
            </div>
        </div>

    </div>

</div>
<div className={contact_styles.contact}>
    <Container className={contact_styles.boxcontainer}>
        <h1 className={contact_styles.title}> Our <span>Location </span></h1>
    </Container>

<div className={contact_styles.contact}>

    <Row className={contact_styles.row}>    

        {/* <iframe className={contact_styles.map}  allowfullscreen="" loading="lazy"></iframe> */}
        <Col>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.657374356943!2d77.69743591447121!3d11.359717291927344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9695a39160b07%3A0x8dbe2d60d40dbbda!2sARUNA%20OIL%20MILL!5e0!3m2!1sen!2sin!4v1679565799306!5m2!1sen!2sin" width="500" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
        <Col>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8136990222456!2d77.71238272095333!3d11.348314366138949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f372bceaabd%3A0x721207df225e38c6!2sAruna%20Oil%20Mill!5e0!3m2!1sen!2sin!4v1679565982567!5m2!1sen!2sin" width="500" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
    </Row>

</div>
        </div>
        </>
    )
}