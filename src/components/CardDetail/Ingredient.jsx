import React from 'react';  


function Ingredient(props) {

  const {Meal,open,setOpen} = props; 
  console.log(Meal.strIngredient12.length)
return <div className={open?'popup open':'popup'}>
  <div className="head">
         <h2>Ingredient's</h2>
         <button className="close" onClick={setOpen}><i className='bx bx-x'></i></button>
     
     </div>
     <div className="grid">
     <div className={Meal.strIngredient5!==null && Meal.strIngredient5.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient5}.png`} alt="" />
                    <p>{Meal.strIngredient5} </p>
                    <p><span>{Meal.strMeasure5}</span></p>
     </div>

     <div className={Meal.strIngredient6!==null && Meal.strIngredient6.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient6}.png`} alt="" />
                    <p>{Meal.strIngredient6} </p>
                    <p><span>{Meal.strMeasure6}</span></p>
     </div>
     
     <div className={Meal.strIngredient7!==null && Meal.strIngredient7.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient7}.png`} alt="" />
                    <p>{Meal.strIngredient7} </p>
                    <p><span>{Meal.strMeasure7}</span></p>
     </div>

     
     <div className={Meal.strIngredient8!==null && Meal.strIngredient8.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient8}.png`} alt="" />
                    <p>{Meal.strIngredient8} </p>
                    <p><span>{Meal.strMeasure8}</span></p>
     </div>



     <div className={Meal.strIngredient9!==null && Meal.strIngredient9.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient9}.png`} alt="" />
                    <p>{Meal.strIngredient9} </p>
                    <p><span>{Meal.strMeasure9}</span></p>
     </div>



     <div className={Meal.strIngredient10!==null && Meal.strIngredient10.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient10}.png`} alt="" />
                    <p>{Meal.strIngredient10} </p>
                    <p><span>{Meal.strMeasure10}</span></p>
     </div>



     <div className={Meal.strIngredient11!==null && Meal.strIngredient11.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient11}.png`} alt="" />
                    <p>{Meal.strIngredient11} </p>
                    <p><span>{Meal.strMeasure11}</span></p>
     </div>



     <div className={Meal.strIngredient12!==null && Meal.strIngredient12.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient12}.png`} alt="" />
                    <p>{Meal.strIngredient12} </p>
                    <p><span>{Meal.strMeasure12}</span></p>
     </div>

     


     <div className={Meal.strIngredient13!==null && Meal.strIngredient13.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient13}.png`} alt="" />
                    <p>{Meal.strIngredient13} </p>
                    <p><span>{Meal.strMeasure13}</span></p>
     </div>

     

     <div className={Meal.strIngredient14!==null && Meal.strIngredient14.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient14}.png`} alt="" />
                    <p>{Meal.strIngredient14} </p>
                    <p><span>{Meal.strMeasure14}</span></p>
     </div>

     
     <div className={Meal.strIngredient15!==null && Meal.strIngredient15.length!==0 ?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient15}.png`} alt="" />
                    <p>{Meal.strIngredient15} </p>
                    <p><span>{Meal.strMeasure15}</span></p>
     </div>






     </div>
  </div>;
}

export default Ingredient;
