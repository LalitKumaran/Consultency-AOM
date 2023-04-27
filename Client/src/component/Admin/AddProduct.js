import axios from 'axios'
import addproduct_styles from './addproduct.module.css'
import {toast} from 'react-toastify'
import {Form,Button,Container} from 'react-bootstrap'

export const AddProduct = () => {

    const add = async (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const imageFile = formData.get('image');
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = async () => {
            console.log(reader.result.split(',')[1])
        await axios.post('/api/product/new', {
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
            <Form.Control className={addproduct_styles.formcontrol} type="file" name="image"></Form.Control>
            </Form.Group>
            <Button className={addproduct_styles.btn} type="submit">Submit</Button>
        </Form>
        </Container>

    )
}