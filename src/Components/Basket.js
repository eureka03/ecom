import React from 'react'

export default function Basket(props) {
    const{cartItems,onAdd, onRemove} =props;
    const itemsPrice = cartItems.reduce((a,c)=> a+c.qty*c.price,0);
    const taxPrice = itemsPrice *0.14;
    const shippingPrice = itemsPrice>500? 0:20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item)=> (
            <div key={item.id} className="row">
                <div className="col-1">{item.name}</div>
                <div className="col-1">
                    <button onClick={()=> onRemove(item)} className="remove">
                        -
                    </button>
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                </div>
                <div className="col-1 text-right">
                    {item.qty} x R{item.price.toFixed(2)}
                </div>

            </div>
            
        ))}
        {cartItems.length !== 0 &&(
            <>
                <hr/>
                <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Tax Price</div>
                    <div className="col-1 text-right">${TaxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">${ShippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Total Price</strong></div>
                    <div className="col-1 text-right"><strong>${itemsPrice.toFixed(2)}</strong></div>
                </div>
                <hr/>
                
            </>
        )}
    </div>
  )
}
