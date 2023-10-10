import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import './SingleRecipe.css'


function SingleRecipe() {
   const[recipe,setRecipe] = useState({});
   let params = useParams();
    const fetchDetails = async()=>{
      const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=478b3f35456d481cb1be3b42796effa3`);
      const data = await api.json();
      setRecipe(data);

    }
    useEffect(()=>{
        fetchDetails();
    },[params.name]);
    console.log(recipe);
     
  return (
     <div className='recipe_wrapper'>
       <Header/>
       <div className='recipe_details'>
          <div className='left'>
             <h3>{recipe.title}</h3>
             <img src={recipe.image} alt="pic not available"/>
            
          </div>
          <div className='right'>
            <h4>SUMMARY</h4>
             <p className="recipe summary" dangerouslySetInnerHTML={{__html:recipe.summary}}></p>
             <h4>INSTRUCTIONS</h4>
             <p className='recipe instructions' dangerouslySetInnerHTML={{__html:recipe.instructions}}></p>
          </div>
       </div>
     </div>
  )
}

export default SingleRecipe