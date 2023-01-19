import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";
import { useStateValue } from './StateProvider';

function Subtotal() {
    const[{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
           renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
        decimalScale={2}
         value={getBasketTotal(basket)} 
         displayType={"text"}
         thousandSeparator={true}
         prefix={"$"}
        />
        <button>Checkout</button>
    </div>
  )
}

export default Subtotal