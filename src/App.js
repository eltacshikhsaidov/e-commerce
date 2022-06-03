import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/product/Product';
import Products from './component/products/Products';
import Dashboard from './component/admin/Dashboard';
import Login from './component/Login';
import Register from './component/Register';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


