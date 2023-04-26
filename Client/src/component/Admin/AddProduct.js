import axios from 'axios'
import addproduct_styles from './addproduct.module.css'
import {Form,Button,Container} from 'react-bootstrap'

export const AddProduct = () => {

    const add = async () => {
        await axios.post('/api/product/new',{}).then((res)=>{
            console.log(res.message)
            if(res.success){
                alert(res.message)
            }
        }).catch((err)=>{console.log(err)})
    }
    return (
        <Container className={addproduct_styles.container}>
        <Form onSubmit={add} className={addproduct_styles.form}>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control type="file"></Form.Control>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        </Container>

    )
}