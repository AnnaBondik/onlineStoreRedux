import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/productsSlice';
 const Filter=({category})=>{
const selectedCategory= useSelector(getSelectedCategory);
const dispatch= useDispatch()
    return(
       <div className='filterItem'>
        <p onClick={()=>{dispatch(filterCategory(category))}}className={selectedCategory===category ? 'buttonSelected categoryButton' : 'categoryButton'}>{category}</p>
        </div> 
    )
}
export default Filter;
