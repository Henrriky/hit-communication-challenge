import './App.css';
import Calls from './pages/Calls';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationRoutes from './routes/ApplicationRoutes';
import AuthContextProvider from './contexts/AuthContext';
import { useEffect, useState } from 'react';


function App() {

  const [receivedMessage, setReceivedMessage] = useState("");
  
  useEffect(() => {
    window.addEventListener('message', function (e) {
      setReceivedMessage(e.data);
      console.log(e.data)
      this.localStorage.setItem("token", receivedMessage);
    })
  }, [receivedMessage]);
  
  return (
    <AuthContextProvider>
      <div className="App font-font-kumb">
        <BrowserRouter>
          <ApplicationRoutes />
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
