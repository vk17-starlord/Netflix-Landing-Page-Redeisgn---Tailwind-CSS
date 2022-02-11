import React  from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import { UserProvider } from './components/Context/UserContext';
import { MealProvider } from './components/Context/MealContext';
import CardDetail from './components/CardDetail/CardDetail';
import { FavouriteProvider } from './components/Context/FavouriteContext';
function App() {



return( 
  <>
  <UserProvider>
      
   <MealProvider>
    
     <FavouriteProvider>

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='SignUp' element={<SignUp/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path="/:id" element={<CardDetail />} />
      
    </Routes>
   

     </FavouriteProvider>
    
   </MealProvider>
  
    


  </UserProvider>
  
  </>
  );
}

export default App;
