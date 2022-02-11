import React, { useContext, useEffect, useState } from 'react';
import RandomCard from './RandomCard';
import beef from '../Assets/beef.png'
import chicken from '../Assets/chicken.png'
import desert from '../Assets/desert.png'
import pasta from '../Assets/pasta.png'
import seafood from '../Assets/seafood.png'
import vegan from '../Assets/vegan.png'
import snacks from '../Assets/snacks.png'
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';
import {MealContext} from '../Context/MealContext';
import './Saved.css';
import { UserContext } from '../Context/UserContext';
import illustration from '../Assets/8.png'
function MainBoard() {
  
  const [Category, setCategory] = useState('Dessert');  
  const [Meals, setMeals] = useContext(MealContext); 
  const ChangeCategory = (category)=>{
    setCategory(category);
  }


  useEffect(() => {
   let Query = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
    axios.get(Query)
    .then((res)=>{
      setMeals(res.data.meals)
    })
  }, [Category,Meals,setMeals]);
   

  let Categories = [
    {category:'Beef' , icon:beef },    
    {category:'Pork' , icon:beef },    
    {category:'Breakfast' , icon:snacks },
    {category:'Chicken' , icon:chicken },
    {category:'Dessert' , icon:desert },
    {category:'Seafood' , icon:seafood },
    {category:'Vegan' , icon:vegan },
    {category:'Pasta' , icon:pasta },
  ]

   const User = useContext(UserContext)
    const [Favourite, setFavourite] = useState([]);
    const [IdStore, setid] = useState([]);
    const [Top, setTop] = useState([]);
    const AddFavourite = (id,name,img)=>{
      setid([...IdStore,id])
      setFavourite([...Favourite,{id,name,img}]);
      if(Favourite.length<=2){
        setTop([...Favourite,{id,name,img}])
      }
    }
    
    const IsFavourite= (id)=>{
      return IdStore.includes(id);
    }
   

  return (
  <div className='MainBoard'>

    <div className="col">

    <div className="header">
       <div>
       <h2>Welcome To <span>CozyFood</span></h2>
       <p>Curated List Of 500+ Recipies !!!</p>
       </div>
      <div>
      <input type="text" className='search-box '/>
        <button className="icon-primary i-flex"><i className='bx bx-search'></i></button>
      </div>
      <div className="icon-menu show-on-small">
      <i className='bx bx-menu'></i>
      </div>
    </div>

    <RandomCard/>

    <div className="categories">
      {
        Categories.map((ele)=>
          <div onClick={()=>{
            ChangeCategory(ele.category)
          }} className={ele.category===Category?'box selected':'box'} key={Categories.indexOf(ele)}>

            <img src={ele.icon} alt="icon" />
            <p>{ele.category}</p>   
        
          </div>
        )
      }
    </div>

    <div className="card-container">
      {Meals!==null?<Card Meals={Meals} Favourite={Favourite} IsFavourite={IsFavourite} AddFavourite={AddFavourite} />:<Loader/>}
    </div>

   




    </div>
    <div className="col-dark">
    <div className='saved'>
    <div className="profile">
    <div className={User.isMale?'box male-profile':'box female-profile'}>

    </div>
    <h2>{User.username}</h2>
     </div>
{
  Top.map((ele)=>
  <div className="f-card">
     <img src={ele.img} alt="" />
    <div className="text">
      <h2>{ele.name}</h2>
       <button>
         View Recipie
       </button>
    </div>
  </div>
   )
}   
{
  Top.length>=2?<button className='link'>View More</button>:null
}
{
  Top.length===0?(
  <div>
    <img className='not-found' src={illustration} alt="not-found"></img>
  <h2>No Favourite Meals</h2>
  </div>):null}
 </div>

   
 
    </div>

  </div>);
}

export default MainBoard;
