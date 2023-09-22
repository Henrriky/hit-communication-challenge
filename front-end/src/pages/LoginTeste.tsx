import { useContext, useState } from "react";
import Form from '../components/Form';
import Header from '../components/Header';
import { useEffect } from "react";
import { verifyExpireToken } from '../services/verifyExpireToken';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

function LoginTeste() {

  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      const tokenIsInvalid = verifyExpireToken();

      if (!tokenIsInvalid) {
        let storageToken = localStorage.getItem("token");
        if (!storageToken) {
          storageToken = ""
        }
        setToken(storageToken);
        navigate("/calls");
      }

      if (tokenIsInvalid) {
        localStorage.removeItem("token");
      }
    }, 50);
  }, [])
  async function handleLogin() {

    const loginParams = new URLSearchParams({
      client_id: 'hit-client-react',
      client_secret: 'QVpnbcuj96tUEYwCxG1mKDTWSsJhjjUW',
      redirect_uri: 'http://localhost:3001/callback',
      response_type: 'code',
      scope: 'openid'
    })
    const url = `http://localhost:8080/realms/hit-realm/protocol/openid-connect/auth?${loginParams.toString()}`;
    window.location.href = url;
  }


  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-center">
      <Button onClick={handleLogin} className="max-w-3xl">Logar na aplicação</Button>
    </div>
  )
}

export default LoginTeste