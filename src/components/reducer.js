export const initialState={
    basket:[
],
}
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=> item.price+amount,0);
function reducer(state,action)
{
    console.log(action)
    switch(action.type){
        case 'SET_USER':
          return{
            ...state,
            user:action.user
          }
        case 'ADD_TO_BASKET':
            //Adding item to Basket
           return{
            ...state,
            basket:[...state.basket,action.item]
           };

        case 'REMOVE_FROM_BASKET':
        //Removing Item From Basket   
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
         //Cloned The cart
          let newBasket = [...state.basket];
    
          if (index >= 0) {
            // Item exist in cart, remove it...
            newBasket.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
    
          return {
            ...state,
            basket: newBasket
          }
        // case 'REMOVE_ALL':
        //   const index1 = state.basket.findIndex(
        //     (basketItem) => basketItem.id === action.id
        //   );
        //   let newBasket1 = [...state.basket];
        //   if (index1 >= 0) {
        //     // Item exist in cart, remove it...
        //     newBasket1=[];
        //   }
        //   else {
        //     console.warn(
        //       `Cant remove product (id: ${action.id}) as its not in basket!`
        //     )
        //   }
        //   return{
        //     ...state,
        //     basket:newBasket1
        //   }
        default:
            return state;
    }
}
export default reducer;