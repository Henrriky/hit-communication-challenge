import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from '../contexts/AuthContext';
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

function Login() {

  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const [token1, setToken1] = useState(null);


  useEffect(() => {
    //https://localhost/callback?code=3c2f7b9e-8b1e-4b8a-8b0a-9b8b5b5b5b5b&state=3c2f7b9e-8b1e-4b8a-8b0a-9b8b5b5b5b5b
    (async () => {
      const queryParams = new URLSearchParams(location.search);
      const code = queryParams?.get('code');
      let bodyParams;
      if (code) {
        bodyParams = new URLSearchParams({
          client_id: 'hit-client-react',
          client_secret: 'QVpnbcuj96tUEYwCxG1mKDTWSsJhjjUW',
          redirect_uri: 'http://localhost:3001/callback',
          grant_type: 'authorization_code',
          code: code as string,
        })
      }
      
      const url = `http://localhost:8080/realms/hit-realm/protocol/openid-connect/token`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: bodyParams?.toString()
      })

      const result = await response.json()

      setToken(result?.access_token);
      if (result.access_token) {
        localStorage.setItem('token', result.access_token)
      }

      
      navigate("/calls");
    })();
  }, [location.search]);



  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-center">
      {/* <Button className="max-w-3xl">Você está logado, seu token é: {token1}</Button> */}
    </div>
  )
}

export default Login