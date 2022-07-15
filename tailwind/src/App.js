import './App.css';
import Home from './components/home';
import LoginPage from './components/login-page';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Private from './components/private';
import About from './pages/about';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/footer';
import Market from './pages/marketplace';



function App() {
  return (
    <Router>
      {window.location.pathname !== "/" ? <Header/> : null }  
      <Routes>
      
            

        <Route  path="/" element={<LoginPage/>} />
        
        <Route  path="/home" element={
           <Private>  <Home />  </Private>  }/>
         
         <Route  path="/about" element={
           <Private>  <About />  </Private>  }/>

          <Route path="/market" element={
            <Private><Market /></Private> }/>
     

         <Route  path="/features" element={
           <Private>  <Details />  </Private>  }/>

            
           
      </Routes>
      {window.location.pathname !== "/" ? <Footer/> : null } 
    </Router>
  );
}

export default App;
