// import axios from 'axios'
// import {useState} from 'react'
// import addproduct_styles from './addproduct.module.css'
// import {toast} from 'react-toastify'
// import {Form,Button,Container} from 'react-bootstrap'
// import {useLocation} from 'react-router-dom'

// export const UpdateProduct = () => {

//     const queryParameters = new URLSearchParams(window.location.search)
//     const pid = queryParameters.get("pid")

//     const [product,setProduct] = useState()

//     const fetch = async()=>{
//         await axios.post(`api/product/find/${pid}`)
//         .then((res)=>{console.log(res.data.product)
//         setProduct(product)})
//         .catch((err)=>{console.log(err)})
//     }

//     const update = async (e) => {
//         e.preventDefault()
//         const form = e.target;
//         const formData = new FormData(form);
//         const imageFile = formData.get('image');
//         const reader = new FileReader();
//         reader.readAsDataURL(imageFile);
//         reader.onloadend = async () => {
//             console.log(reader.result.split(',')[1])
//         await axios.post('/api/product/new', {
//             name: formData.get('name'),
//             description: formData.get('description'),
//             price: formData.get('price'),
//             category: formData.get('category'),
//             image: reader.result.split(',')[1],
//         })
//         .then((res)=>{
//             if(res.data.success){
//                 toast.success(res.data.message)
//             }})
//         .catch((err)=>{console.log(err)})
//     }
//     }   
//     return (
//         <Container onLoad={fetch} className={addproduct_styles.container}>
//         <Form onSubmit={update} className={addproduct_styles.form}>
//             <Form.Group className={addproduct_styles.formgroup}>
//             <Form.Label className={addproduct_styles.formlabel}>Name</Form.Label>
//             <Form.Control value={product.name} className={addproduct_styles.formcontrol} type="text" name="name"></Form.Control>
//             </Form.Group>
//             <Form.Group className={addproduct_styles.formgroup}>
//             <Form.Label className={addproduct_styles.formlabel}>description</Form.Label>
//             <Form.Control value={product.description} className={addproduct_styles.formcontrol} type="text" name="description"></Form.Control>
//             </Form.Group>
//             <Form.Group className={addproduct_styles.formgroup}>
//             <Form.Label className={addproduct_styles.formlabel}>Price</Form.Label>
//             <Form.Control value={product.price} className={addproduct_styles.formcontrol} type="text" name="price"></Form.Control>
//             </Form.Group>
//             <Form.Group className={addproduct_styles.formgroup}>
//             <Form.Label className={addproduct_styles.formlabel}>Category</Form.Label>
//             <Form.Control value={product.category} className={addproduct_styles.formcontrol} as="select" name="category">
//                 <option value="wholesale">wholesale</option>
//                 <option value="retail">retail</option>
//             </Form.Control>
//             </Form.Group>
//             <Form.Group className={addproduct_styles.formgroup}>
//             <Form.Label className={addproduct_styles.formlabel}>Image</Form.Label>
//             <Form.Control className={addproduct_styles.formcontrol} type="file" name="image"></Form.Control>
//             </Form.Group>
//             <Button className={addproduct_styles.btn} type="submit">Update</Button>
//         </Form>
//         </Container>

//     )
// }
import axios from 'axios'
import addproduct_styles from './addproduct.module.css'
import {toast} from 'react-toastify'
import {Form,Button,Container} from 'react-bootstrap'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from 'react-router-dom';

export const UpdateProduct = () => {
    const Navigate=useNavigate()
    const location = useLocation()
    // console.log(location.state.amount)
    console.log(location.state.amount._id)
    const add = async (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const imageFile = formData.get('image');
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = async () => {
            console.log(reader.result.split(',')[1])
        await axios.put('/api/product/admin/update', {
            pid:location.state.amount._id,
            name: formData.get('name'),
            description: formData.get('description'),
            price: formData.get('price'),
            category: formData.get('category'),
            image: reader.result.split(',')[1],
        })
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
            }})
        .catch((err)=>{console.log(err)})
    }
    }   
    return (
        <Container className={addproduct_styles.container}>
        <Form onSubmit={add} className={addproduct_styles.form}>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Name</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" value={location.state.amount.name} name="name"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>description</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" value={location.state.amount.description}name="description"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Price</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" value={location.state.amount.price} name="price"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Category</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} as="select" name="category">
                <option value="wholesale">wholesale</option>
                <option value="retail">retail</option>
            </Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Image</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="file" name="image"></Form.Control>
            </Form.Group>
            <Button className={addproduct_styles.btn} type="submit">Submit</Button>
        </Form>
        </Container>

    )
}
