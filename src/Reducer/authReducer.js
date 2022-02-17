import {AUTH_LOGIN, AUTH_LOGOUT} from './type'

const authReducer = (state, action) =>{
    const{type, payload:{isAuthenticated, user}} = action;
    switch (type){
        case AUTH_LOGIN :
            return {
                ...state,
                isLoaded: false,
                isAuthenticated,
                user
            }
        case AUTH_LOGOUT:
            return{
                ...state,
                isAuthenticated,
                user
            }
        
        default:
            return state;
    }
}

export default authReducer;