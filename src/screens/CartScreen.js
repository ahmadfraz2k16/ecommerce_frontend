import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';
import { CART_ADD_ITEM } from '../constants/cartConstants';


function CartScreen({ match, location, history }) {
  const { id } = useParams();
  const productId = id;
  console.log('Product ID is :', productId)
  // Extract quantity from the URL query string
  const qty = new URLSearchParams(useLocation().search).get('qty');
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

   return (
    <Row>
      cart   
    </Row>
  ); 
}
export default CartScreen;