import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const Cartitems = () => {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cart-item'>
        <div className="cart-item-format">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quality</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
               return <div>
            <div className='cartitem.format cart-item-format'>
        <img src={e.image} alt=''className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitem-quality'>{cartItems[e.id]}</button>
        <p>${e.new_price*cartItems[e.id]}</p>
        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
            </div>
            <hr />
        </div>      
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitem-totalitem">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-totalitem'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                         </div>
                        <hr />
                        <div className='cartitem-totalitem'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                            </div>
                             </div>
                       
                        <button className='Proceed'>PROCEED TO CHECKOUT</button>
                        </div>
                    
                    
               
                <div className="cartitems-promcode"><p>If you have a promo code, enter here</p></div>
                
                <div className="cartitemspromobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        
    </div>
  )
}

export default Cartitems
