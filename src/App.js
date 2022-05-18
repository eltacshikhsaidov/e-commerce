import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;


