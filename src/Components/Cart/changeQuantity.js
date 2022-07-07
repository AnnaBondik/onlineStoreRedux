const ChangeQuantity = ({quantity, setQuantity})=>{
    const addQuantity=()=>{
        const newQuantity= quantity+1;
        setQuantity(newQuantity);
    }
    const removeQuantity=()=>{
        const newQuantity = quantity-1;
        if (quantity<=1) return;
        setQuantity(newQuantity);
    }
    return(
        <div>
            <button className="changeQuantityBtn" onClick={removeQuantity}>-</button>
            <span>{quantity}</span>
            <button className="changeQuantityBtn"  onClick={addQuantity}>+</button>
        </div>
    )
}
export default ChangeQuantity;