
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Component/Footer/Footer';
import women_banner from './Component/Assets/banner_women.png'
import kids_banner from './Component/Assets/banner_kids.png'
import men_banner from './Component/Assets/banner_mens.png'
import Loginsignup from  './Pages/Loginsignup'
import Product from './Pages/Product'
import Cart from './Pages/Cart';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
         <Route path='/' element={<Shop/>} ></Route>
         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} ></Route>
         <Route path='/womens' element={<ShopCategory banner={women_banner}category="women"/>} ></Route>
         <Route path='/kids' element={<ShopCategory  banner={kids_banner}category="kid"/>} ></Route>
         <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/> </Route>
        <Route path='/login' element={<Loginsignup/>}/> 
         <Route path='/cart' element={<Cart/>}/>  
         </Routes>
         <Footer/>
         
        
      </BrowserRouter>

    </div>
  );
}

export default App;
