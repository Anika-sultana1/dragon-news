import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../components/firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    console.log(user, loading)

   


    const createUser = (email, password)=>{
      setLoading(true)   
      return  createUserWithEmailAndPassword(auth, email, password)

    }  

    const signInUser = (email, password)=>{
     setLoading(true)
      return signInWithEmailAndPassword(auth,email, password)
    }


    const logOutUser = ()=> {
      setLoading(true)
      return signOut(auth)
    }
useEffect( ()=>{
const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
    setLoading(false)
})
return ()=>{
unSubscribe();
}
}, [])

  const authData = {
    user,
    loading,
    setLoading,
    setUser,
    createUser,
    signInUser,
    logOutUser,
  }
    return (
       <AuthContext value={authData}>
{children}
       </AuthContext>
    );
};

export default AuthProvider;