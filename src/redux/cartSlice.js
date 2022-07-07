import { createSlice } from '@reduxjs/toolkit';

export const cartSlice= createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItemToCart: (state, action)=>{
            const time = new Date().getTime()
            state.cartItems.push({
                id:time,
                productId: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice:action.payload.quantity * action.payload.product.price,
                taxPrice:(action.payload.quantity*action.payload.product.price)*0.13
            })
        },
        removeItemFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }

})
export const priceWithoutTax = state=>{
    return state.cart.cartItems.reduce((total, cartItem)=>{
        return cartItem.totalPrice+ total;
    },0)
}
export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total,cartItem)=>{
        return cartItem.totalPrice+ cartItem.taxPrice+ total;
    },0)
}
export const totalTaxPrice= state=>{
    return state.cart.cartItems.reduce((total, cartItem)=>{
        return cartItem.taxPrice+total;
    },0)
}
export const totalShipping = ()=>{
    if ({getTotalPrice} > 100){
        return 0;
    }
    else return 8;
    
}


export const getCartItems = state=> state.cart.cartItems;

export const { addItemToCart,removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;