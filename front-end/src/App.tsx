import './App.css';
import Calls from './pages/Calls';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationRoutes from './routes/ApplicationRoutes';


function App() {
  return (
    <div className="App font-font-kumb">
      <BrowserRouter>
        <ApplicationRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
