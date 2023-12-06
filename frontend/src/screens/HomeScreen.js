import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
function HomeScreen ()  {
 const [products,setProduct]=useState([])

useEffect(()=>{

  async function fetchProducts(){
      const {data} = await axios.get(`/api/products/`)
      setProduct(data)
      console.log(data,"data++++++++++++")
  }
  fetchProducts()
},[]) 
  console.log(products);
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(useProduct=>(
                <Col key={useProduct._id} sm={12} md={6} lg={4} xl={3}>

                <Product product={useProduct}  />

                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen