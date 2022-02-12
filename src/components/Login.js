import React, {useState, useContext}from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import {authContext} from '../Provider/AuthContext'
import Alert from './Alert';


const theme = createTheme();


export default function Login() {
    const [alert,setAlert] = useState(null);
    const [form, setForm] = useState({
        username:'',
        password:'',
    })
    const handleForm = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }
      
    const {LoginContext} = useContext(authContext);
    const handleSubmit = async (event)=>{
      event.preventDefault();
      try {
        const res = await LoginContext(form);
        if(!res.success){
          setAlert(res.message);
          setTimeout(()=>setAlert(null),3000)
        }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Alert message={alert}/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Tên đăng nhập"
              name="username"
              autoComplete="username"
              value={form.username}
              onChange={handleForm}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              value={form.password}
              onChange={handleForm}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ mật khẩu"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2" style={{textDecoration:'none', fontSize: '0.875rem',color: '#1976d2'}}>
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" style={{textDecoration:'none',fontSize: '0.875rem', color: '#1976d2'}}>
                  Không có tài khoản?Đăng kí
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}