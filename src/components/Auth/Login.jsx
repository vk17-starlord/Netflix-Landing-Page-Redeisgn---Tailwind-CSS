import React, { useState } from 'react';
import './login.css';
import { Link , useNavigate} from 'react-router-dom';
function Login() {
  
  const Navigate = useNavigate();

  const [user, setuser] = useState({
    username:'',
    password:'',
  }
  );



  const SubmitForm = ()=>{

    if(user.username!=='' ||  user.password!==''){
      let  username =sessionStorage.getItem("username");
      let password =  sessionStorage.getItem("password");
      if(username===user.username && password===user.password){
        console.log('success',user)
        Navigate('/home')
      }else{
        alert('Invalid UserName Or Password')
        console.log('Invalid Username or Password');
      }
      }else{
        alert('Please Enter Username Or Password')
      }
  }
  return (
  <div className='login'>
  <div className="col-1 col"></div>    
  <div className="col-2 col">
  <div className="inner-box">
    
    <h1>Create Your Account</h1>
  <div className="input">
     <p id='label'>Enter Your User Id</p>
    <input type="text" value={user.username} onChange={e=>setuser({...user,username:e.target.value})} />
     </div>

     <div className="input">
     <p id='label'>Enter Your Password</p>
     <input type="password" value={user.password} onChange={e=>setuser({...user,password:e.target.value})} />
     </div>
  
     <button className='cta' onClick={()=>{
       SubmitForm()
     }}>
       Login To CozyBites
     </button>
   <p id='account'> Don't Have an account  ? <Link to="/Signup">Sign Up</Link></p>
   
    </div>  
  </div>    

  </div>);
}

export default Login;
