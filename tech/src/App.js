import './App.css';
import LoginPage from './components/login-page';
import Forms from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import UserList from './features/users/userList';
import EditUser from './features/users/edit-user';
import Modal from './components/modal';


function App() {
  return (
    <Router>
         <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route  path="/table"  element={<Forms />} />
            <Route  path="/modaltable"  element={<Modal />} />
            <Route path= "/user" element ={<UserList />} />
            <Route path= {`/edit-user/:id`} element ={<EditUser />}/>
        </Routes>
   
   
    </Router>
  );
}

export default App;
