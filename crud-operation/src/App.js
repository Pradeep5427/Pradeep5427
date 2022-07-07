import React from 'react';
import LoginPage from './components/login-page';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Private from './components/private';

function App() {
  return (
  <Router>
    <Routes>
             <Route  path="/login" element={<LoginPage />} />
             <Route  path="/" element={
           <Private>
              <Home />
           </Private>
              
           
             }/>
                              
    </Routes>
  </Router>
  );
}
export default App;
