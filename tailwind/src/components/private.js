import React from 'react';
import { Navigate} from 'react-router-dom';

export default function Private({children}){
  const Auth = localStorage.getItem('isAuthenticated');
  console.log(Auth)

  return Auth ? children : <Navigate to="/" />

  
}
