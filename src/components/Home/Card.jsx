import React from 'react';
import { useNavigate } from 'react-router';
function Card(props) {
  const Navigate = useNavigate();

  const FindMealById=(id)=>{
    Navigate(`/${id}`)
  }
    console.log('card-data',props.Meals)
    const {Meals} = props 
  return (
  <div className='card-grid'>
      {
          Meals.map((ele,index)=>
               <div className='card' key={index}>
               <img src={ele.strMealThumb} alt="" />
               <div className="text">
                 <h2>{ele.strMeal}</h2>
                 <button className='view' onClick={()=>FindMealById(ele.idMeal)}>View Recipie</button>
               </div>
               </div>)
      }
 
  </div>);
}

export default Card;
