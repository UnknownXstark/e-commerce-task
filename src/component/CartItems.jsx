import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { MdDeleteOutline } from "react-icons/md";
import './CartItems.css'

const CartItems = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.map((item) => (
        <div className="cartitems-format cartitems-format-main" key={item.id}>
          <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "contain"  }} />
          <p>{item.title}</p>
          <p>₦{item.price.toLocaleString()}</p>
          <div className="cartitems-quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <p>₦{(item.price * item.quantity).toLocaleString()}</p>
          <MdDeleteOutline onClick={() => removeFromCart(item.id)} style={{fontSize: '30px', cursor:'pointer', color:'red', fontWeight:'lighter'}} />
        </div>
      ))}
      <div className="cartitem-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₦{getTotalAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₦{getTotalAmount()}</h3>
                </div>
            </div>
            <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
