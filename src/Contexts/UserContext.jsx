import React, { useEffect, useState } from 'react'
import AuthContext from './Context'
import { getAuth , createUserWithEmailAndPassword ,updateProfile , onAuthStateChanged} from "firebase/auth";
import app from '../Firebase/Firebase.init';


const auth =  getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser =(name ,photoURL)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          }).then(() => {
          }).catch((error) => {
          });
    }
    useEffect(()=>{
        const unSubcribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              // User is signed out
              // ...
            }
        
          });
          return ()=>{
                unSubcribe();
          }
        


        // return
    },[])
    
  return (
    <AuthContext.Provider value={{createUser,updateUser , user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserContext
