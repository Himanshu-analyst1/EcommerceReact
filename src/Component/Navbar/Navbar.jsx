import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
    <div className="nav-logo">
    <img src={logo} alt=''/>
    <p>Shopper</p>
  </div>
  <ul className="nav-menu">
    <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:"none"}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>setMenu("Mens")}><Link style={{textDecoration:"none"}}to='mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
    <li onClick={()=>setMenu("Womens")}><Link style={{textDecoration:"none"}}to='womens'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
    <li onClick={()=>setMenu("Kids")}><Link style={{textDecoration:"none"}}to='Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
 </ul>
 <div className='nav-cart'>
  <Link to='/login'> <button>Login</button></Link> 
    <Link to='/cart'><img src={cart_icon} alt=''/></Link>
    <div className='nav-cart-count'>{getTotalCartItems()}</div>
 </div>
      
    </div>
  )
}

export default Navbar
