import * as React from 'react'
import { Grid, Toolbar, Paper, Box, TextField, Typography, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useForm } from "react-hook-form";
export default function Home() {

  function user(email, password) {
    var data = new FormData();
    data.append('email', email);
    data.append('password', password);

    console.log("user data", data);

    const userData = {
      method: 'post',
      url: 'https://43cd-103-241-22-82.in.ngrok.io/admin-api/admin-login/',
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      },
    }

    axios(userData).then(e => {
      console.log(e)
    }).catch(e => console.log(e))

  }

  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = ({ name, email, message, password, confirmPassword }) => {
    console.log({
      email,
      password
    });
    // setLoaderState(true)

    user(email, password)
    reset()
  }

  // ================================================================ API Login =============================================

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const email = (e) =>{
    console.log(e.target.value);
  }
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={12}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              minHeight: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              '& > :not(style)': {
                m: 1,
                // width: 128,
                // height: 128,
              },
            }}
          >
            <Paper elevation={3} sx={{
              padding: '2em',
              width: '25rem'
            }}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Welcome to Omkar Development! 👋🏻
                </Typography>
                <TextField id="outlined-basic" label="Email" type={'email'} variant="outlined" onChange={email} />
                {/* <input type={'text'}  {...register("password", {
                      required: 'Password is Required',
                      minLength: {
                        value: 6,
                        message: "Minimum password length is 6"
                      }
                    })}/> */}
                {errors.email && (<small style={{ fontSize: "14px" }} className='text-danger contact_form_error'>{errors.email.message}</small>)}
                {/* <TextField id="outlined-basic" label="Password" type={'password'} variant="outlined" /> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                   
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"

                  />
                </FormControl>
                <Button variant='contained' size='large' onClick={user}>Login</Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
