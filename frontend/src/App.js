
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Footer from './components/Footer';
import Login from "./components/login"
import Navbar from "./components/Navbar"

import Signup from './components/Signup';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/signup" element= {<Signup/>}/>

      </Routes>
    </Router>
   
      
    </>
  );
}

export default App;
