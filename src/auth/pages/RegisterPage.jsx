import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"


const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email:[ (value) => value.includes('@') , 'El correo debe tener una @.'],
  password:[ (value) => value.length >= 6 , 'La contraseña debe tener más de 6 dígitos.'],
  displayName:[ (value) => value.length >= 1 , 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  // const dispatch = useDispatch();

  // const [formSubmitted, setFormSubmitted] = useState(false)

  // const { status, errorMessage } = useSelector( state => state.auth  );
  // const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  // const { 
  //   formState, displayName, email, password, onInputChange,
  //   isFormValid, displayNameValid, emailValid, passwordValid,   
  // } = useForm(formData, formValidations);

  // const onSubmit = ( event ) => {
  //   event.preventDefault();
  //   setFormSubmitted(true)

  //   if ( !isFormValid ) return;

  //   dispatch(starCreatingUserWithEmailPassword(formState));
  // }

  return (
    // <AuthLayout title='Crear cuenta'>
    <div>
     
       {/* <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>  */}
       <form className='animate__animated animate__fadeIn animate__faster'> 
          <Grid container>

            <Grid item xs={ 12 } sx ={{ mt: 2 }}>
              <TextField 
              label="Nombre completo" 
              type="name"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              // value={displayName}
              // onChange={ onInputChange }
              // error={ !!displayNameValid && formSubmitted }
              // helperText={ displayNameValid }

              />       
              </Grid> 

            <Grid item xs={ 12 } sx ={{ mt: 2 }}>
              <TextField 
              label="Correo" 
              type="email"
              placeholder="correo"
              fullWidth
              name='email'
              // value={email}
              // onChange={ onInputChange }
              // error={ !!emailValid && formSubmitted }
              // helperText={ emailValid }
              />       
              </Grid> 

              <Grid item xs={ 12 } sx ={{ mt: 2 }}>
              <TextField 
              label="Contraseña" 
              type="password"
              placeholder="contraseña"
              fullWidth
              name='password'
              // value={password}
              // onChange={ onInputChange }
              // error={ !!passwordValid && formSubmitted}
              // helperText={ passwordValid }
              />       
              </Grid > 
              
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  <Grid 
                  item 
                  xs={ 12 }
                  // display= { !!errorMessage ? '': 'none' }
                  >
                    {/* <Alert severity='error'>{ errorMessage }</Alert> */}
                  </Grid>
                  <Grid item xs={ 12 }>
                    <Button
                    // disabled={ isCheckingAuthentication }
                    sx={{backgroundColor: '#9c5252', '&:hover': {
                      backgroundColor: '#6c1919',
                    }}}
                    type= "submit"
                     variant='contained' 
                     fullWidth 
                     >
                      Crear cuenta
                    </Button>
                  </Grid>
                  
                  
                <Grid container direction='row' justifyContent='end'>

                    <Typography sx={{ mr: 1, mt: 1.5  }}>¿Ya tienes cuenta?</Typography>
                    <Link sx={{ mt: 2 }} component={ RouterLink }  color='#9c5252' to="/auth/login">
                    ingresar
                    </Link>

                  </Grid>


              </Grid>

          </Grid>
        </form>

        </div>

  

        
      
  )
}
