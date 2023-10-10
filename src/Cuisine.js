import React from 'react'
import {useState,useEffect} from 'react'
import { Link,useParams} from 'react-router-dom';
import Header from './Header';
import './Popular.css'
import './Header.css'

function Cuisine() {
    const [cuisine,setCuisine] = useState([])
    let params = useParams();
   

    const fetchData = async (name)=>{
       
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=478b3f35456d481cb1be3b42796effa3&cuisine=${name}`);
            const recipes = await api.json();
            setCuisine(recipes.results);
            
        
      
    }
    useEffect(()=>{
         fetchData(params.type);
        console.log(params.type);
       
    },[params.type])
  
  return (
    <div className='veg'>
      
      <Header imgUrl='./deli.jpg'/>
    <h2>{params.type}</h2>

<div className='vegetarian'>

{cuisine.map((recipe)=>{
        return(
            
            <div className='vegeterian_dishes'>
            <img src={recipe.image} alt={recipe.title} />
           <h4><Link className='popular_link' to={`/recipe/${recipe.id}`}>Click:{recipe.title}</Link></h4>
            </div>
           
            
        )
    })} 
    
</div>

</div>
  )
}

export default Cuisine