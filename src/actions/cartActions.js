import axios from 'axios'
import { CART_ADD_ITEM} from '../constants/cartConstants'
// getState lets us get any part of state e.g getting cart form store.. just like useselector where we can pull the entire state
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    console.log(data)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
