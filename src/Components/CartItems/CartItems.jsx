import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product,cartItems,removeFromCart,totalCartAmount}=useContext(ShopContext)
    
  return (
    <div className='cartitems'>
<div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr/>
{all_product.map((e)=>{ 
    if(cartItems[e.id]>0){
        return <div>
        <div className="cartitems-format  cartitems-format-main">
            <img src={e.image} alt=""  className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>Total Amount:${e.new_price*cartItems[e.id]}</p>
            <img className='cartitem-remove_icon'src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            
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
            <div className="cartitems-total-item">
                <p>SubTotal</p>
                <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${totalCartAmount()}</h3>
            </div>
        </div>
        <button>Proceed To CheckOut</button>
    </div>
    <div className="cartitems-promocode">
        <p>I you have Promo Code, Enter it Here</p>
        <div className="cartitems-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
        </div>
    </div>
</div>
</div>
  )
}

export default CartItems