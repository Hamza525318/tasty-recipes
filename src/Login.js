import React, { useEffect } from 'react';
import './Login.css';
import {UserAuth} from './AuthContext'
import {useNavigate} from 'react-router-dom'
function Login() {
    const{googleSignIn,user} = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async()=>{
           try {
             await googleSignIn();
           } catch (error) {
             console.log(error)
           }
    }
    useEffect(()=>{
         if(user !=  null){
            navigate('/');
         }
  
    },[user])
  return (
    <div className='login_wrapper'>
        <div className='login_form'>
             <img src='./happy.jpg' alt='TasTyReciPes' />
             <img src='./googly.png' alt='Sign In with Google' className='google_icon'/>
             <button className='btn' onClick={handleGoogleSignIn}>Sign In</button>
            
        </div>

    </div>
  )
}

export default Login