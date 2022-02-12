import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthContext';
import Box from '@mui/material/Box';
import CircularProgress  from '@mui/material/CircularProgress';
const ProtectedRoutes =({children})=>{
    const {auth:{isAuthenticated, isLoaded}} = useContext(authContext);
    if(isLoaded){
        return(
        <Box sx={{display:'flex', marginTop: '300px', justifyContent:'center'}}>
            <CircularProgress />
        </Box>
        ) 
    }else{
        return isAuthenticated ? (children) : (<Navigate to='/login'/>)
    }
}
export default ProtectedRoutes;