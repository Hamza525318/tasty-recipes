
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Popular.css'


function Popular() {
    const[popularfood,setFood] = useState([]);
   

    const fetchData = async ()=>{
        const check = localStorage.getItem("popularfood");
        if(check){
            setFood(JSON.parse(check))
        }else{
            const api = await fetch("https://api.spoonacular.com/recipes/random?number=9&apiKey=478b3f35456d481cb1be3b42796effa3")
            const data = await api.json();
            localStorage.setItem("popularfood",JSON.stringify(data.recipes))
            setFood(data.recipes);
        }
      
    }
    useEffect(()=>{
        fetchData();
    },[])
    
    


   

  return (
    <div className='veg'>
        <h2>TRENDING:</h2>
   
    <div className='vegetarian'>
  
    {popularfood.map((recipe)=>{
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

export default Popular