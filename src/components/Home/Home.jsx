import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { Link , useNavigate} from 'react-router-dom';
import '../Styles/Home.css'
import SideNav from './SideNav';
import MainBoard from './MainBoard';
import { MealProvider } from '../Context/MealContext';
function Home() {

  const user = useContext(UserContext);
  console.log('user',user)
  const Navigate = useNavigate();
  useEffect(()=>{
    if(user.username===''){
    Navigate('/');
    }
  },[])

  return ( 
     <div className='home'>
      <div className="col hide-on-small">
      <SideNav/>
      </div>
      <MainBoard/>
     </div>
)}

export default Home;
