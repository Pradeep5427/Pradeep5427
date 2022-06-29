import React from 'react';
import LoginPage from './components/login-page';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import ProtectedRoute from './components/private';

function App() {
  return (
  <Router>
    <Routes>
             <Route exact path="/" element={<LoginPage />} />
             <Route exact path="/table" element={
            
               <Home />
             } />
    </Routes>
  </Router>
  );
}
export default App;
