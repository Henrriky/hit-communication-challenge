import { useContext, useState } from "react";
import Form from '../components/Form';
import Header from '../components/Header';
import { useEffect } from "react";
import { verifyExpireToken } from '../services/verifyExpireToken';
import { AuthContext } from '../contexts/AuthContext';
import { redirect, useNavigate } from "react-router-dom";

function Login() {

  // const [receivedMessage, setReceivedMessage] = useState("");
  
  // useEffect(() => {
  //   window.onload = function () {
  //     window.addEventListener('message', function (e) {
  //       console.log(e.origin)        
  //       if (e.origin != "http://localhost:5173") {
  //         return;
  //       } else {
  //         // setReceivedMessage(e.data);
  //         // console.log(e.data)
  //         // this.localStorage.setItem("token", receivedMessage);
  //       }
  //     })
  //   }
  // }, [receivedMessage]);


  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {

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
    
  },[])

  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-center">
        <Header/>
        <Form/>
    </div>
  )
}

export default Login