import React from 'react';
import chef from '../Assets/profession.png'
function RandomCard() {
  return <div className="card-header">
      <div className="left">
          
  <h2>Hey are you confused what should you cook today ???</h2>
  <p>Have a look at CozyFood's Special Meal for today !!</p>
  <button className="cta">
      View Recipie
  </button>
      </div>
      <div className="right">
          <img src={chef} alt="" />
      </div>
</div>;
}

export default RandomCard;
