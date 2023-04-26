import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

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
        <Form onSubmit={add} Style="margin-top:100px">
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

    )
}