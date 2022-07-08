import './App.css';
import Home from './components/home';
import LoginPage from './components/login-page';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Private from './components/private';
import About from './pages/about';
import Details from './pages/Details';



function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<LoginPage/>} />
        
        <Route  path="/home" element={
           <Private>  <Home />  </Private>  }/>
         
         <Route  path="/about" element={
           <Private>  <About />  </Private>  }/>

<Route  path="/features" element={
           <Private>  <Details />  </Private>  }/>
            
           
      </Routes>
    </Router>
  );
}

export default App;
