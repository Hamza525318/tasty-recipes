import React, { useEffect } from 'react'
import Home from './Home'
import SingleRecipe from './SingleRecipe'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthContextProvider } from './AuthContext'
import SearchRecipe from './SearchRecipe'
import Cuisine from './Cuisine'
import Practise from './Practise'
import Login from './Login'


function Pages() {  
  

  return (
       <AuthContextProvider>
       <Routes>
        
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/recipe/:name' element={<SingleRecipe/>}/>
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/dish/:dish' element={<SearchRecipe/>}/>
          <Route path='/practise' element={<Practise/>}/>
        
        
      </Routes>
      </AuthContextProvider>
      
  )
}

export default Pages