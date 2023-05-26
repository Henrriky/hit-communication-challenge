import './App.css';
import Calls from './pages/Calls';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationRoutes from './routes/ApplicationRoutes';
import AuthContextProvider from './contexts/AuthContext';


function App() {
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
