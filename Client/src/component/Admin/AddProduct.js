import axios from 'axios'
import {useState} from 'react'
import addproduct_styles from './addproduct.module.css'
import {toast} from 'react-toastify'
import {Form,Button,Container} from 'react-bootstrap'

export const AddProduct = () => {

    const [image,setImage] = useState()

    const add = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', e.target.name.value)
        formData.append('description', e.target.description.value)
        formData.append('price', e.target.price.value)
        formData.append('category', e.target.category.value)
        formData.append('image',image)
        await axios.post('/api/product/new', formData)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
            }})
        .catch((err)=>{console.log(err)})
    }   
    return (
        <Container className={addproduct_styles.container}>
            <h1 className={addproduct_styles.title}>New <span>Product</span></h1>

        <Form onSubmit={add} className={addproduct_styles.form}>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Name</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" name="name"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>description</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" name="description"></Form.Control>
            </Form.Group>
            <Form.Group className={addproduct_styles.formgroup}>
            <Form.Label className={addproduct_styles.formlabel}>Price</Form.Label>
            <Form.Control className={addproduct_styles.formcontrol} type="text" name="price"></Form.Control>
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
            <Form.Control className={addproduct_styles.formcontrol} onChange={(e)=>(setImage(e.target.files[0]))} type="file" name="image"></Form.Control>
            </Form.Group>
            <Button className={addproduct_styles.btn} type="submit">Submit</Button>
        </Form>
        </Container>

    )
}