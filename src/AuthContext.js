import { useContext,createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import {GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from 'firebase/auth'

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
         const[user,setUser] = useState({})
         
      const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
      }
      const googleLogOut = async()=>{
        signOut(auth);
      }
       
    

       useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser);
              console.log(currentUser);
          })
          return ()=>{
            unsubscribe();
          }
       },[])

      return(
        <AuthContext.Provider value={{googleSignIn,googleLogOut,user}}>
            {children}
        </AuthContext.Provider>
      )
}
export const UserAuth = ()=>{
    return useContext(AuthContext);
    
}