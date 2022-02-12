import React,{useState, createContext, useReducer} from "react";

export const NavigateContext = createContext();
const NavigateContextProvider = ({children}) =>{
    const navigateReducer =(state, action)=>{
        const {type, payload} = action;
        switch(type){
            case 'SET_MUSIC':
                return{
                    ...state,
                    music: payload.music.current,
                }
            case 'SET_RANGE':
                return{
                    ...state,
                    rangeRef: payload.current,
                }
            default:
                return state
        }
    }
    const[funcNav, dispatch] = useReducer(navigateReducer,{
        music:{},
    })
    
    const navigateContextData={
        dispatch,
        funcNav
    }
    return(
        <NavigateContext.Provider value={navigateContextData}>{children}</NavigateContext.Provider>
    )
}

export default NavigateContextProvider