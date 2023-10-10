import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import Header from './Header';

function SearchRecipe() {
  const params = useParams();
    const[dish,setDish] = useState([]);
      const fetchData = async(name)=>{
          const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=478b3f35456d481cb1be3b42796effa3&query=${name}`);
          const data = await api.json();
          setDish(data.results);
      }
      useEffect(()=>{
          fetchData(params.dish);
      },[params.search])

  return (
    <div className='veg'>
  
    <Header/>

<div className='vegetarian'>

{dish.map((recipe)=>{
        return(
            
            <div className='vegeterian_dishes'>
            <img src={recipe.image} alt={recipe.title} />
            <h4><Link className='popular_link' to={`/recipe/${recipe.id}`}>Recipe:{recipe.title}</Link></h4>
            </div>
           
            
        )
    })} 
    
</div>

</div>
  )
}

export default SearchRecipe