import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? <div  style={{backgroundImage: `url(https://www.10wallpaper.com/wallpaper/1366x768/1510/sky_star_light_dark-Design_HD_Wallpapers_1366x768.jpg)`, }}>{children}</div>
        : <Navigate to="/auth/login" />
}
