// import { ThemeProvider } from "@emotion/react"
import { Grid, Typography } from "@mui/material"
// import { purpleTheme } from "../../theme/purpleTheme"



export const AuthLayout = ({ children, title='' }) => {
  return (
    
    <div>
      <Grid      
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"    
      sx={{ minHeight: '100vh', padding: 4 }}
      // sx={{ minHeight: '100vh',  backgroundColor: 'primary.main', padding: 4 }}
      >

      <Grid item
      className='box-shadow'
      xs={ 3 }
      sx={{ 
            width: { md: 300 }, 
            backgroundColor: 'rgb(42 25 25 / 13%)', 
            padding: 3, 
            borderRadius: 2  
        }}>
        
        <Typography variant='h5' sx= {{ mb:1, color: 'white' }}>{ title }</Typography>


            { children } 
        </Grid>

        </Grid>

        </div>

  )
}
