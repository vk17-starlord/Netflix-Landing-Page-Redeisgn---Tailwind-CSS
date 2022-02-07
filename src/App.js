import React, { useContext } from 'react';
import {Routes,Route,Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import { UserProvider } from './components/Context/UserContext';
import { MealProvider } from './components/Context/MealContext';
import CardDetail from './components/CardDetail/CardDetail';
function App() {



return( 
  <>
  <UserProvider>
      
   <MealProvider>
   <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='SignUp' element={<SignUp/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
          <Route path="/:id" element={<CardDetail />} />
    </Routes>
    
   </MealProvider>
  
    


  </UserProvider>
  
  </>
  );
}

export default App;
