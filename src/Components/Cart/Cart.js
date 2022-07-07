import { getCartItems, getTotalPrice, priceWithoutTax, totalTaxPrice } from '../../redux/cartSlice';
import image from './cart.jpg';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart=()=>{
    const cartItems=useSelector(getCartItems);
    const totalPrice =useSelector (getTotalPrice);
    const totalTax =useSelector(totalTaxPrice);
    const noTax= useSelector (priceWithoutTax);
    const totalShipping = noTax > 100 ? 0 : 9;
    const finalPrice = totalPrice+totalShipping;

  
    return(
        <div className='cartItem'>
            <img src={image} alt="cart"/>
            <h3>Total: $ {(finalPrice).toFixed(2)} </h3>
            <h4>Tax: $ {(totalTax).toFixed(2)}</h4>
            <h4>Shipping: $ {totalShipping}</h4>
            {cartItems.length === 0 && 'Cart is Empty'}
            {cartItems.map(cartItem=> <CartItem cartItem={cartItem}/>)}
            
        </div>
    )
}
export default Cart;