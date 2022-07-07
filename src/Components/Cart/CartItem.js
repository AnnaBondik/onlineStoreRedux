import { useDispatch } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem=({cartItem})=>{
    console.log(cartItem);
    const products= dataProducts.find(item=> item.id===cartItem.productId)
    console.log(products);
    const dispatch = useDispatch();
    return(
        <div>
           <p>{cartItem.quantity} of {products.name}: ${products.price * cartItem.quantity}</p>
          <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}><img src="https://img.icons8.com/material-sharp/344/filled-trash.png" alt ="delete" width="20"/></span> 
        </div>
    )
}
export default CartItem;