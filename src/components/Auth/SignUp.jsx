import React, { useState } from 'react';
import './login.css';
import { Link , useNavigate} from 'react-router-dom';
function SignUp() {
  
  const Navigate = useNavigate();

  const [user, setuser] = useState({
    username:'',
    password:'',
    isMale:true,
    isFemale:false,
  }
  );

  const ToggleGender = (gender)=>{
    gender==='male'?setuser({...user,isMale:true,isFemale:false}):setuser({...user,isMale:false,isFemale:true})
    console.log(user)
  }

  const SubmitForm = ()=>{

    if(user.username!=='' ||  user.password!==''){
        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("password", user.password);
        sessionStorage.setItem("isMale", user.isMale);
        sessionStorage.setItem("isFemale", user.isFemale);
        Navigate('/home')
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
  
     <p id='label'>Please Select Your Gender</p>

     <div className="b-container">
       <div className={user.isMale?'box selected male':'box  male'}
       onClick={()=>{ToggleGender('male')}}
       >
       </div>

       <div className={user.isFemale?'box selected female':'box  female'}
       onClick={()=>{ToggleGender('female')}}
       >
       </div>

     </div>
     <button className='cta' onClick={()=>{
       SubmitForm()
     }}>
       SignUp To CozyBites
     </button>
   <p id='account'> Already Have an account  ? <Link to="/">Log In</Link></p>
   
    </div>  
  </div>    

  </div>);
}

export default SignUp;
