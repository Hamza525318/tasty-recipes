import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Practise.css'



function Practise() {
 
 const[movies,setMovies] = useState([]);
 const API_KEY = "d333ff51bddbac02d486e00ec8e10c0e";
 const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
  
 const getmovies = async()=>{

    const data = await fetch(url);
    const response = await data.json();

    setMovies(response.results);
 }

 useEffect(()=>{
    getmovies();
 },[url]);

 return (
    <main className='movie_lists'>
       <h2>Trending</h2>
        <div className='row_posters'>
        {movies.map((movie,index)=> (movie.backdrop_path &&  (
                  
                  
                   <div className='search'>
                    <Link to={`/italian`}><img  className='row_poster' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path: movie.poster_path}`} alt={movie.original_title} />
                    </Link>
                   </div>
                    
                 
                
                 
             ))
             
             
        )}
        </div>
    </main>
  )

  
}

export default Practise