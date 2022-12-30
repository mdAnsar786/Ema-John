import React from 'react';
import './Cart,css';

const Cart = (props) => {
    const {cart} =props;

    // const totalReducer =(previous,product)=> previous + product.price;
    // const total = cart.reduce ( totalReducer,0);
    let totalquantity = 0;
    let total = 0;
    for(const product of cart) {
        total = total + product.price * product.quantity;
        totalquantity = totalquantity + product.quantity;
    }

    const shipping = total> 0 ? 15 : 0 ;
    const tax =(total + shipping) * 0.10;
    const grandTotal =total +shipping +tax;
    return (
        <div>
             <h3>Order Summary</h3>
              <h5>Item ordered:{totalquantity}</h5>
              <br/>
              <p>Total: {total.toFixed(2)}</p>
              <p>shipping: {shipping}</p>
              <p>tax:{tax.toFixed(2)}</p>
              <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;