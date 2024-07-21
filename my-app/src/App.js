import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    );
  
}

export default App;
