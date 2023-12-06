import React,{useState,useEffect} from 'react';
import { Link ,useParams} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import axios from 'axios'


const ProductScreen = ({match}) => {

  const [product,setProducts]=useState([])

  useEffect(()=>{
  
    async function fetchProducts(){
        const {data} = await axios.get(`/api/products/ ${match.params.id}`)
        setProducts(data)
        console.log(data,"data++++++++++++")
    }
    fetchProducts()
  },[])
  return (
    <div>
      <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
       <Row>
        <Col md={5} >
          <Image src={product.image} alt={product.name}></Image>
        </Col>


        <Col md={3}>
          <ListGroup variant=''>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} rating`} color={'#f8e825'} />
            </ListGroupItem>

            <ListGroupItem>
              Price:${product.price}
            </ListGroupItem>

            <ListGroupItem>
              Description:{product.description}
            </ListGroupItem>

          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col> 
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Stock:</Col>
                  <Col> 
                    {product.countInStock > 0 ? `In Stock` : `Out of Stock`}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <button className='btn btn-dark'disabled={product.countInStock===0}type='button'> Add To Cart</button>
            </ListGroupItem>

            </ListGroup>
          </Card>
        
        </Col>



       </Row>
    </div>
  )
}

export default ProductScreen