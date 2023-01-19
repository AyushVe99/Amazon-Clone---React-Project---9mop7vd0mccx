import React, { useState } from 'react'
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import {Signup} from './Signup';


function Login() {
  let history = useHistory();
  
  const [login, setLogin] = useState({
    
    "email": "",
    "password": "",
    
    });

  const userLogin=(e)=>{
    e.preventDefault();
    const loggedUser=JSON.parse(localStorage.getItem("loginDetails"));
    console.log(loggedUser)
    if(login.email===loggedUser.email && login.password===loggedUser.password)
    {
      history.push('/')
    }
    else{
      alert("Invalid Email and Password")
    }
  }
    
//   let userInfo;
// if(localStorage.getItem('userDetils') === null){
//     userInfo = [];
// } else {
//     userInfo = JSON.parse(localStorage.getItem('userDetils'))
// }
// console.log(userInfo)
// const signupUser = () => {
//     const storeToLocal = {
//         userName : signup.username,
//         email : signup.email,
//         password : signup.password
//     }
//     localStorage.setItem('userDetils',JSON.stringify(storeToLocal))
// }


// const handleSubmit=()=>{
//       if(email.current.value=="abc@gmail.com" && password.current.value=="12345")
//       {
//         localStorage.setItem("emailData","abc@gmail.com");
//         localStorage.setItem("passwordData","12345")
//       }
// }  
return (
    
    
    <div className='login'>
        <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt=''
                />
        </Link>
       <div className='login_container'>
        <h1>Sign In</h1>
        {/* { ((getEmail&&getPassword)?{}: */}
          <form onSubmit={userLogin}>
          
            <h5>E-mail</h5>
            <input  type='email' name="email" value={login.email} onChange={(e) => {setLogin({ ...login, [e.target.name]: e.target.value }); }} placeholder='Enter Your Email'/>
            
            <h5>Password</h5>
            <input type='password' name="password" value={login.password} onChange={(e) => {setLogin({ ...login, [e.target.name]: e.target.value }); }} placeholder='Enter Your Password'/>
            
           
           
            <button className='login_SigninButton' type='submit' >Sign In</button>
             
            </form> 

        
          {/* ) } */}
        
        <Link to='/signup'>        
        <button  className='login__registerButton'>Create New Account</button>
        </Link>

            
       </div>
    </div>
  )
}


export default Login