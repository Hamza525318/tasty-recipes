import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css'

function Veg() {
     const[vegetarianfood,setVegieFood] = useState([]);

     const fetchFood = async()=>{
             const check = localStorage.getItem("vegetarianfood");
             if(check){
                setVegieFood(JSON.parse(check))
             }else{
            const api = await fetch("https://api.spoonacular.com/recipes/random?number=8&apiKey=478b3f35456d481cb1be3b42796effa3&tags=vegetarian");
            const data = await api.json();
            localStorage.setItem("vegetarianfood",JSON.stringify(data.recipes));
            setVegieFood(data.recipes);
            }
        }
     
     useEffect(()=>{
        fetchFood();
     },[])

  return (
    <div className='veg'>
    <h2>VEGETARIAN DISHES:</h2>
<div className='vegetarian'>
    
     {vegetarianfood.map((recipe)=>{
        return(
         <div className='vegeterian_dishes' key={recipe.id}>
         <img src={recipe.image} alt={recipe.title} />
         <h4><Link className='popular_link' to={`/recipe/${recipe.id}`}>Recipe:{recipe.title}</Link></h4>
       </div>
        )
     })}

    
</div>


</div>
  )
}

export default Veg