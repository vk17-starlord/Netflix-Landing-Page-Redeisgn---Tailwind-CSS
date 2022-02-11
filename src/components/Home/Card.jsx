import React from 'react';
import { useNavigate } from 'react-router';

function Card(props) {
  
  const Navigate = useNavigate();
   const FindMealById=(id)=>{
    Navigate(`/${id}`)
  }
  
  const {IsFavourite,AddFavourite,Meals}=props;

 
  return (
  <div className='card-grid'>
      {
          Meals.map((ele,index)=>
               <div className='card' key={index}>
               <img src={ele.strMealThumb} alt="" />
               <div className="text">
                 <h2>{ele.strMeal}</h2>
             <div className="btn-container">
             <button className='view' onClick={()=>FindMealById(ele.idMeal)}>View Recipie</button>
                 <button className='saved-btn' onClick={()=>{
                   AddFavourite(ele.idMeal,ele.strMeal,ele.strMealThumb)
                 }}>

                   {
                     !IsFavourite(ele.idMeal)?<i class='bx bx-heart' ></i>:<i class='bx bxs-heart'></i>
                   }

                 </button>
             </div>
               </div>
               </div>)
      }
 
  </div>);
}

export default Card;
