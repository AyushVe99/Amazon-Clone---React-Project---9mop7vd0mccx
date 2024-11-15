import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id, title, image,price,rating}) {
const [{basket},dispatch]=useStateValue();
const [itemCount,setItemCount]=React.useState(0)
    const addToBasket=()=>{
    dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        },
    });
    setItemCount(itemCount+1);
   }
   const removeFromBasket = () => {
    if(itemCount>0)
      {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
        });
        setItemCount(itemCount-1);
      }
      
    
  };
    return (
    <div className="product">
      <img src={image} alt="" />
    <div className="product__info">
      <p className='product__title'>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(Math.round(rating.rate))
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
          
          {/* {
            const rate=Math.round(rating.rate);
            for(let i=0;i<rate;i++)
            {

            }
          } */}
          
      </div>
    </div>

    <div className="product__quantity">
        <button onClick={removeFromBasket}>-</button>
        <span>{itemCount}</span>
        <button onClick={addToBasket}>+</button>
      </div>

    {/* <button onClick={addToBasket}>Add to Cart</button> */}
  </div>
  )
}

export default Product