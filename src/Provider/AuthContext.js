import React, {createContext, useReducer, useEffect } from 'react';
import authReducer from '../Reducer/authReducer';
import axios from 'axios';
import setAuthHeader from '../ultils/setAuthHeader';
import { AUTH_LOGIN } from '../Reducer/type';
export const authContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [auth, dispatch] = useReducer(authReducer,{
        isLoaded: true,
        isAuthenticated: false,
        user: null,
    })
    useEffect(()=> userLogin(),[])

    const userLogin = async () =>{
        if(localStorage['access_token']){
            setAuthHeader(localStorage['access_token'])
        }
        try {
            const response = await axios.get('https://music-app-lofi.herokuapp.com/auth')
            if(response.data.success){
                dispatch({
                    type: AUTH_LOGIN,
                    payload:{
                        isAuthenticated: true,
                        user: response.data.user
                    }
                })
            }
        } catch (error) {
            localStorage.removeItem('access_token');
            setAuthHeader(null);
            dispatch({
                type: AUTH_LOGIN,
                payload:{
                    isAuthenticated: false,
                    user: null
                }
            })
        }
        
    }

    const LoginContext = async (form) =>{
        try {
            const response = await axios.post('https://music-app-lofi.herokuapp.com/auth/login',form)
            if(response.data.success){
                localStorage.setItem('access_token',response.data.accessToken);
                await userLogin()
                return response.data
            }
        } catch (error) {
            if(error.response.data){
                return error.response.data
            }
            else{
                return {success: false, message:'Loi he thong'}
            }
        }
    } 
    const RegisterContext = async (form)=>{
        try {
            const response = await axios.post('https://music-app-lofi.herokuapp.com/auth/register',form)
            if(response.data.success){
                localStorage.setItem('access_token',response.data.accessToken);
                await userLogin();
                return response.data;
            }
        } catch (error) {
            if(error.response.data){
                return error.response.data;
            }
            else {
                return {success: false, message:'loi he thong'}
            }
        }
    }

    const authContextData = {
        LoginContext,
        RegisterContext,
        auth,
        userLogin,
    }
    return(
        <authContext.Provider value={authContextData}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;
