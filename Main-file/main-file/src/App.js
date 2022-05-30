import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import Clients from './Pages/Client';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Error from './Pages/error';
import {BrowserRouter  as Router, Route,Switch} from 'react-router-dom';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
// import Status from './components/con-status';
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';
/*Log in*/
import Login from './Pages/Login';
import ProtectedRoute from './Pages/private';










function App(props){	
  
 
return (
  <Router>
    
<div className="App">
 {/* <Status /> */}
  
 
          <Header />

     
  <Switch>
  <Route path="/" exact component = {Login}></Route>
  <ProtectedRoute path='/main' component={Main} />
  <ProtectedRoute path='/about'  component={()=> <About color="blue" align="center" /> }/>
  <ProtectedRoute path='/client' component={Clients}/>
  <ProtectedRoute path='/contact'  component={Contact}/>
  <ProtectedRoute path='/service' component={Service}/>
  <Route path='/home' component={Home}/>
  <Route path='/create'component={Create}/>
  <Route path='/edit' component={Edit}/>
  <Route path="*" component= {Error} />
  </Switch>
  
  
          <Footer />

  </div>
  </Router>
)
}

export default App;