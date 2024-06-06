
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../context';


const formData = {
  email:'',
  password:''
}

export const LoginPage = () => {

 
  const { email, password, onInputChange } = useForm(formData);

  const onGoogleSignIn = async (event) => {
    event.preventDefault();
     startGoogleSignIn() ;
  } 


  const { startGoogleSignIn, startLoginWithEmailPassword } = useContext( AuthContext );

  const onSubmit = (event) => {

    event.preventDefault();
    
    startLoginWithEmailPassword({email, password});
    
  }
 

  return (
     <div style={{ background: 'linear-gradient(to bottom, #fc466b, #3f5efb)', height: '100vh' }}>
    <AuthLayout title='login'>
      
       <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
       {/* <form className='animate__animated animate__fadeIn animate__faster'> */}

          <Grid container>
          <Grid item xs={ 12 } sx ={{ mt: 2 }}>
            <TextField 
            lavel="Correo" 
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            value={ email }
            onChange={ onInputChange }
            InputProps={{
            style: { color: 'black', borderColor: 'white', borderWidth: 1, borderStyle: 'solid', background:'white', height: '40px' },

          }}
          variant="outlined"
            />       
            </Grid> 

            <Grid item xs={ 12 } sx ={{ mt: 2 }}>
            <TextField 
            lavel="Contraseña" 
            type="password"
            placeholder="contraseña"
            fullWidth
            name="password"
            value={ password }
            onChange={ onInputChange }
            InputProps={{
              style: { color: 'black', borderColor: 'white', borderWidth: 1, borderStyle: 'solid', background:'white', height: '40px' },
  
            }}
            variant="outlined"
            />       
            </Grid > 
            
            <Grid container 
            spacing={ 2 } 
            sx={{ mt: 1 }}
            >

              <Grid 
                  item 
                  xs={ 12 }
                  // display= { !!errorMessage ? '': 'none' }
                  >
                    {/* <Alert severity='error'>{ errorMessage }</Alert> */}
                  </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                  // disabled = { isAuthenticating }
                  sx={{backgroundColor: '#9c5252', '&:hover': {
                    backgroundColor: '#6c1919',
                  },
                  width: '120px',
                  height: '30px'                
                  }}
                  type='submit' 
                  variant='contained' 
                  fullWidth 
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                  sx={{backgroundColor: '#9c5252', '&:hover': {
                    backgroundColor: '#6c1919',
                  },
                  width: '120px',
                  height: '30px'
                
                  }}
                  // disabled = { isAuthenticating }
                  variant='contained' 
                  fullWidth
                  onClick={ onGoogleSignIn }                                    
                  >
                    {/* <Google /> */}
                    <Typography sx={{ ml: 1}}>Google</Typography>
                  </Button>
                </Grid>

                <Grid container direction='row' justifyContent='end'>

                  <Link sx={{ mt: 2 }} component={ RouterLink } color='#fbfbfb' to="/auth/register">
                  Crear una cuenta
                  </Link>

                </Grid>


            </Grid>

          </Grid>
        </form>

              
     </AuthLayout>
     </div>
             
      
  )
}
