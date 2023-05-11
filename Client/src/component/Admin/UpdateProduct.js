import axios from 'axios'
import addproduct_styles from './addproduct.module.css'
import {toast} from 'react-toastify'
import {Form,Button,Container} from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from 'react-router-dom';

export const UpdateProduct = () => {
    const Navigate=useNavigate()
    const location = useLocation()
    const [image,setImage] = useState(location.state.product.image)
    const [name,setName] = useState(location.state.product.name)
    const [description,setDescription] = useState(location.state.product.description)
    const [price,setPrice] = useState(location.state.product.price)
    const [category,setCategory] = useState(location.state.product.category)
    console.log(location.state.product)
    const update = async (e) => {
        e.preventDefault()
        var data = {
            pid : location.state.product._id,
            name : name,
            description : description,
            price : price,
            category : category,
            image : image
        }
        await axios.put('/api/product/admin/update', data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
            }})
        .catch((err)=>{console.log(err)})
    }
    return (
        <Container className={addproduct_styles.container}>
        <Form onSubmit={update} className={addproduct_styles.form}>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Name</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>description</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" onChange={(e)=>setDescription(e.target.value)} value={description} name="description"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Price</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" onChange={(e)=>setPrice(e.target.value)} value={price} name="price"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Category</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} as="select" name="category">
                <option value="wholesale">wholesale</option>
                <option value="retail">retail</option>
            </Form.Control>
            </Form.Group>
            {/* <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Image</Form.Label>
            <Form.Control onChange={(e)=>setImage(e.target.files[0])} className={addproduct_styles.formcontrol} type="file" name="image"></Form.Control>
            </Form.Group> */}
            <Button className={addproduct_styles.btn} type="submit">Submit</Button>
        </Form>
        </Container>

    )
}
