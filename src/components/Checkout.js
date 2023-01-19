import React from 'react'
import './Checkout.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    // const removeAll=()=>{
    //     dispatch({ 
    //       type: 'REMOVE_ALL',
           
    //       });}
    return (

    <div className='checkout'>
       <div className='checkout_left'>
       <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length===0 ?(
            <div>
                <h2>No Items in Cart!</h2>
            </div>
        ):(
        <div>
            <h2 className='checkout_title'>Your Products!
                </h2>
                {/* List all Checkout Products */}
                {basket?.map(item=>(
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
                ))}
                </div>
                
           ) }
           </div>
           {
            basket.length>0&&(
                <div className='checkout_right'>
                    <Subtotal/>
                </div>
            )
           }
           {/* <div>
            {(
                  <button onClick={removeAll}>Remove All Items</button>
                )}
                </div> */}
    </div>
  )
}

export default Checkout