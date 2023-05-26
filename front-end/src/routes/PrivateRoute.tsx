import { useContext, useEffect } from "react";
import { Route, RouteProps } from 'react-router-dom';
import NotAllowed from '../pages/NotAllowed';
import { AuthContext } from "../contexts/AuthContext";
import { verifyExpireToken } from "../services/verifyExpireToken";

interface PrivateRouteProps {
  element: JSX.Element
}


function PrivateRoute({ element }: PrivateRouteProps) {


  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
      const tokenIsInvalid = verifyExpireToken();

      if (!tokenIsInvalid) {
        let storageToken = localStorage.getItem("token");
        if (!storageToken) {
          storageToken = ""
        }
        setToken(storageToken);
      }
  

      if (tokenIsInvalid) {
          setToken("");
      }
  },[])


  let isAuthenticated = false;

  if (token) { 
    isAuthenticated = true;
  }


  return isAuthenticated ? element : <NotAllowed />

}

export default PrivateRoute