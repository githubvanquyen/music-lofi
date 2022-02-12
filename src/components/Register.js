import React,{useState, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useNavigate} from 'react-router-dom';
import {authContext} from '../Provider/AuthContext';
import Alert from './Alert';
const theme = createTheme();
export default function Register() {
  const Navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [form,setForm] = useState({
    username:'',
    email:'',
    password:'',
  })
  const handleInput = (event)=>{
    setForm({...form,[event.target.name]: event.target.value})
  }
  const data = useContext(authContext);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const {RegisterContext} = data;
    try {
      const account = await RegisterContext(form);
      if(!account.success){
        setAlert(account.message);
        setTimeout(()=>setAlert(null),3000)
      }
      /* if(account.success){
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token',account.accessToken)
      } */
    } catch (error) {
      console.log(error.message);
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
            Sign up
          </Typography>
          <Alert message={alert}/>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Tên đăng nhập"
                  value={form.username}
                  onChange={handleInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Địa chỉ email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  value={form.password}
                  onChange={handleInput}
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2" style={{textDecoration:'none',fontSize: '0.875rem', color: '#1976d2'}}>
                  Bạn đã có tài khoản?Đăng Nhập
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}