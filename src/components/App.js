import '../styles/App.css';
import React,{useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
// import { useStateValue } from './StateProvider';
// import { auth } from './firebase';
const App = () => {
// const [{user},dispatch]=useStateValue();
// //Piece of code which runs based on given condition
// useEffect(()=>{
// const unsubscribe= auth.onAuthStateChanged((authUser)=>{
//   if(authUser)
//   {
//    dispatch({
//     type:'SET_USER',
//     user:authUser,
//    });
//   }
//   else{
//     dispatch({
//       type:'SET_USER',
//       user:null,
//      });
//      return()=>{
//       unsubscribe();
//      };
//   }
// })
// },[])

  return (
    <Router>
    <div id="main">
      <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
      </Route>  
      <Route path="/login">
        <Login/>
        {/* <Signup/> */}
        </Route> 
      <Route path='/Signup'>
        <Signup/>
         
      </Route> 
        <Route path="/">
          <Header/>
          <Home/>

        </Route>  
    
      </Switch>
    </div>
    </Router>
  )
}


export default App;
