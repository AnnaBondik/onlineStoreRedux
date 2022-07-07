 import './App.css';
import Cart from './Components/Cart/Cart';
import Products from './Components/ProductsComponents/Products';
import Categories from './Components/Filter/Categories';
function App() {
  return (
    <div className='App' >
      <div className='categories'>
      <Categories/>
      </div>
      <div className='cart'>
      <Cart/>
      </div>
      <div>
      <Products/>
      </div>
    </div>
  );
}

export default App;
