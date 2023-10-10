import React, { useEffect, useState } from 'react'
import './Header.css'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiHamburger,GiNoodles,GiChopsticks} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import { UserAuth } from './AuthContext'
import {AiFillStar,AiOutlineHome} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
    const[search,setSearch] = useState("")
    let navigate = useNavigate();
  const{googleLogOut,user} = UserAuth();
  const handleGoogleLogOut =  async()=>{
    try {
      await googleLogOut();
      alert(`logged out user is: ${user.displayName}`)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(user === null){
        navigate('/login');
    }
  },[user])

     
  return (
    <div className='header'>
        <Link to='/'><AiOutlineHome className='home_icon' size={25}/></Link>
        <button className='logout_btn' onClick={handleGoogleLogOut}>LogOut</button>
        <img src='./happy.jpg' alt='-' />
        <div className='search_food'>
        <input type="text" value={search}  onChange={(e)=>setSearch(e.target.value)} placeholder='enter a dish name.....'/>
        <Link to={`/dish/${search}`}><FaSearch size={20}/></Link>
        </div>
        <div className='food_icons'>
            <div className='each_icon'>
            <Link to="/cuisine/Italian" className='cuisine_link'>
           <FaPizzaSlice size={20} className='food_icon'/>
            <p>Italian</p>
            </Link>
           </div>
          
           <div className='each_icon'>
            <Link to="/cuisine/American" className='cuisine_link'>
           <GiHamburger size={20} className='food_icon'/>
           <p>American</p>
           </Link>
           </div>

           <div className='each_icon'>
            <Link to="/cuisine/Mediterranean" className='cuisine_link'>
           <GiNoodles size={20} className='food_icon'/>
           <p>Mediterranean</p>
           </Link>
           </div>

           <div className='each_icon'>
            <Link to="/cuisine/German" className='cuisine_link'>
           <GiChopsticks size={20} className='food_icon'/>
           <p>German</p>
           </Link>
           </div>

           <div className='each_icon'>
            <Link to="/cuisine/Chinese" className='cuisine_link'>
           <AiFillStar size={20} className='food_icon'/>
           <p>Chinese</p>
           </Link>
           </div>
        </div>
    </div>
  )
}

export default Header