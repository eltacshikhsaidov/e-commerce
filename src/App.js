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
// import Login from './component/Login';
// import Register from './component/Register';
import Footer from './component/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import NotFound from './component/NotFound';
// import Map from './component/map/Map';

function App() {

  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/about' element={<About />} />

        {
          isAuthenticated &&
          <>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/products/:id" element={<Product />} />
          </>
        }

        {
          user && user.email === 'eltac.shixseyidov250301@gmail.com' &&
          <Route path='/dashboard' element={<Dashboard />} />
        }

        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/register' element={<Register />} /> */}

        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;


