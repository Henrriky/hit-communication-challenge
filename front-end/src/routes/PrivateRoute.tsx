import { Route, RouteProps } from 'react-router-dom';
import NotAllowed from '../pages/NotAllowed';

interface PrivateRouteProps {
    element: JSX.Element
  }


function PrivateRoute({element}: PrivateRouteProps) {
    const isAuthenticated = false;


    return isAuthenticated ? element : <NotAllowed/>
  
}

export default PrivateRoute