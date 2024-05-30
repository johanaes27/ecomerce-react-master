
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"


const formData = {
  email:'',
  password:''
}

export const LoginPage = () => {

  // const { status, errorMessage } = useSelector( state => state.auth ); 

  // const dispatch  = useDispatch();
  
  // const { email, password, onInputChange } = useForm(formData);

  // const isAuthenticating = useMemo(() => status === 'checking', [status]);

  // const onSubmit = ( event ) => {
  //   event.preventDefault();

  //   //! No es esta la accion a despachar //hacef dispatch del thunk
  //       dispatch( startLoginWithEmailPassword({email, password}) );
  // }
 
  // const onGoogleSignIn = () => {
  //   dispatch( startGoogleSignIn() );

  // } 

 

  return (

    // <AuthLayout title='Login'>
    <div>
      
       {/* <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'> */}
       <form className='animate__animated animate__fadeIn animate__faster'>

          <Grid container>
          <Grid item xs={ 12 } sx ={{ mt: 2 }}>
            <TextField 
            lavel="Correo" 
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            // value={ email }
            // onChange={ onInputChange }
            />       
            </Grid> 

            <Grid item xs={ 12 } sx ={{ mt: 2 }}>
            <TextField 
            lavel="Contraseña" 
            type="password"
            placeholder="contraseña"
            fullWidth
            name="password"
            // value={ password }
            // onChange={ onInputChange }
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
                  }}}
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
                  }}}
                  // disabled = { isAuthenticating }
                  variant='contained' 
                  fullWidth
                  // onClick={ onGoogleSignIn }                                    
                  >
                    {/* <Google /> */}
                    <Typography sx={{ ml: 1}}>Google</Typography>
                  </Button>
                </Grid>

                <Grid container direction='row' justifyContent='end'>

                  <Link sx={{ mt: 2 }} component={ RouterLink } color='#9c5252' to="/auth/register">
                  Crear una cuenta
                  </Link>

                </Grid>


            </Grid>

          </Grid>
        </form>

        </div>              
    // </AuthLayout>

        
      
  )
}
