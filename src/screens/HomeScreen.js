import React from 'react'
import products from '../products'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
function HomeScreen() {
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