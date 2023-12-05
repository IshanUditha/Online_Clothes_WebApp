import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer';
import men from './Assets/men.png';
import women from './Assets/women.png';
import kid from './Assets/kid.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategory bannerImg ={men} category='men'/>}/>
        <Route path='/women' element={<ShopCategory bannerImg ={women} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory bannerImg ={kid} category='kid'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
