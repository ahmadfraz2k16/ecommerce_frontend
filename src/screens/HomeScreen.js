import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
function HomeScreen() {
  // products is a state and setProducts is a method which will set the state = products, 
  // by default state will be set to empty Array, then fetchProducts() will change the state 
  const [products, setProducts] = useState([])

useEffect(()=>{
    async function fetchProducts(){
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }
    fetchProducts()
},[])

  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                // giving unique id for each product, otherwise error of key in console
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* passing product object in a product component as prop */}
                <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen