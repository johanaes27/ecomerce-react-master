import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';
import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user,
  }
}


export const AuthProvider = ({ children }) => {
    
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const startGoogleSignIn = async() => {

    try {
      const sign = await singInWithGoogle()
    
      login( sign.displayName, sign.uid, sign.email, sign.photoURL );
      
    } catch (error) {
      console.error(error)
    }
}

const startLoginWithEmailPassword = async({email, password}) => {

  try {
    const sign = await loginWithEmailPassword({email, password})

    if(!sign.ok) return logout(sign)
  

    login( sign.displayName, sign.uid, sign.email, sign.photoURL );
    

  } catch (error) {
    console.error(error)
  }
}

const starCreatingUserWithEmailPassword = async({email, password, displayName}) => {
  
  try {
    
    const sign =  await registerUserWithEmailPassword({email, password, displayName});
  
     if( !sign.ok ) return logout({errorMessage}) 
  
    login(sign.displayName, sign.uid, sign.email, sign.photoURL ) 

  } catch (error) {
     console.error(error)
  } 



}

  const login = ( name = '', uid, email, photoURL ) => {

    const user = { name, uid, email, photoURL }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify( user ) );

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState,

      // Methods
      login,
      startGoogleSignIn,
      startLoginWithEmailPassword,
      starCreatingUserWithEmailPassword,
      logout,
    }}>
        { children }
    </AuthContext.Provider>
  );
}
