
import Filter from './Filter';
const Categories = ()=>{
    return(
        <div>
            <div className='header'>
            <h2>Caswell Massey</h2> 
            </div>
          
           <div className='categories'>
           {['SOAP','FRAGNANCE','CARE', 'LOTION', 'ALL'].map(
            category=> <Filter category={category}/>
           )}
           </div>
          
        </div>


    )
}
export default Categories;