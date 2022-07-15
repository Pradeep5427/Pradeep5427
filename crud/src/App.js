import React,{ useState, Suspense } from 'react';
import LoginPage from './components/login-page';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Private from './components/private';
import i18n from './components/i18n';
import Loading from './components/loading';
import LocalContext from './components/localContext';


function App() {

  const [locale,setLocale] =  useState(i18n.language);

  i18n.on('languageChanged',(lng)=> setLocale(i18n.language))

  return (
    <LocalContext.Provider value={{locale,setLocale}}>
    <Suspense fallback={<Loading />}>
   
  <Router>
    <Routes>
             <Route  path="/login" element={<LoginPage />} />
             <Route  path="/" element={  <Private>   <Home /></Private>    }/>             
    </Routes>
  </Router>
 
  </Suspense>
  </LocalContext.Provider>
  );
}
export default App;
