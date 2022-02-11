import axios from 'axios';
import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import Loader from '../Home/Loader';
import './CardDetail.css'
import Ingredient from './Ingredient';
function CardDetail() {
    
        let Areas= [
          {
            flag:'us',
            strArea: "American",
            
          },
          {
            flag:'gb',
            strArea: "British"
          },
          {
            flag:'ca',
            strArea: "Canadian"
          },
          {
            flag:'cn',
            strArea: "Chinese"
          },
          {
            flag:'hr',
            strArea: "Croatian"
          },
          {
            flag:'eg',
            strArea: "Egyptian"
          },
          {
            flag:'fr',
            strArea: "French"
          },
          {
            flag:'gr',
            strArea: "Greek"
          },
          {
            flag:'in',
            strArea: "Indian"
          },
          {
            flag:'gb-nir',
            strArea: "Irish"
          },
          {
            flag:'it',
            strArea: "Italian"
          }
        ]
    
        let { id } = useParams();
    const [Meal, setMeal] = useState(null);
    const [Steps , setSteps] = useState(null);
    useEffect(() => {
    let Query = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    axios.get(Query)
    .then((res)=>{
        console.log(res.data.meals[0])
        setMeal(res.data.meals[0])
        let array = res.data.meals[0].strInstructions.split('.');
        setSteps(array)
    }
    )
}, []);

  const [isOpen, setisOpen] = useState(false);
  const ToggleOpen= ()=>{
      setisOpen(!isOpen)
  }
  return (
<div className='Main-Container'>

        {Meal!==null && Steps!==null ?
         <div className="main-card">
<Ingredient  Meal={Meal}  open={isOpen} setOpen={ToggleOpen} />

        <div className="col-1">
            <div className="image">
                <img className='food' src={Meal.strMealThumb} alt="" />

            </div>
            <div className="ing-container">

                <div className={Meal.strIngredient1!==''?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient1}.png`} alt="" />
                    <p>{Meal.strIngredient1} </p>
                    <p><span>{Meal.strMeasure1}</span></p>
                </div>
                <div className={Meal.strIngredient2!==''?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient2}.png`} alt="" />
                    <p>{Meal.strIngredient2} </p>
                    <p><span>{Meal.strMeasure2}</span></p>
                </div>
                <div className={Meal.strIngredient3!==''?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient3}.png`} alt="" />
                    <p>{Meal.strIngredient3} </p>
                    <p><span>{Meal.strMeasure3}</span></p>
                </div>
                <div className={Meal.strIngredient4!==''?"ing":'hide'}>
                    <img src={`https://www.themealdb.com/images/ingredients/${Meal.strIngredient4}.png`} alt="" />
                    <p>{Meal.strIngredient4} </p>
                    <p><span>{Meal.strMeasure4}</span></p>
                </div>
            </div>
            <div className="center">

            <button className="view" onClick={  ToggleOpen }>View More</button>

            </div>


        </div>
        <div className="col-2">
            <h2>{Meal.strMeal}</h2>
            <h5> Origin - <span>{Meal.
            strArea}</span> </h5>
            <h5> Category - <span>{Meal.strCategory}</span> </h5>
            <h3>How To Cook ?</h3>
            {
                Steps.map(ele=><p>{ele}</p>)
            }
        </div>

        </div>:<Loader></Loader>}
    </div>
  );
}

export default CardDetail;
