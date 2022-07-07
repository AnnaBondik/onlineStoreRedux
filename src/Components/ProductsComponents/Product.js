import ChangeQuantity from '../Cart/changeQuantity';
import { useState } from 'react';
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
const Product=({product})=>{
    const dispatch=useDispatch();
    const [quantity, setQuantity]= useState(1);
    return(
        <div className='item'>

<h4>{product.name}</h4>
<img src={`${product.img}.jpg`} width="350"/>
<p>$ {product.price}</p>
<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
<button className='addToCartBtn' onClick={()=> {dispatch(addItemToCart({product, quantity}))}}>Add to cart</button>
        </div>

    )
}
export default Product;