import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Homepage from './Components/Homepage'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  const [laoding, setLoading] = useState(true);
 


  // async function fetchData(){
  //   setLoading(true);
  //   try{
  //     let response=await fetch(apiUrl);
  //     let output=await response.json();
  //     setCourses(output.data);
  //   }
  //   catch(error){
  //     toast.error("Network is error")
  //   }
  //   setLoading(false);
  // }
  const getUserDataUrl = 'http://127.0.0.1:4000/api/v1/collections';
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(getUserDataUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication headers if required (e.g., JWT token)
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
       const userData = await response.json();
       setCourses(userData.toure);
       console.log(userData.toure);
      // console.log(response[0].image);
      
      

      // const userNames = userData.map(user => user.price);
     // Output: ['Alice', 'Bob', 'Charlie']
      // console.log('User data:', userData);
      // console.log('Message:', userData.message);
     
  
      // Display the data on your webpage
     
    } catch (error) {
      console.error('There was a problem with fetching the user data:', error);
    }
    setLoading(false);
  };
  
  useEffect(()=>{
    fetchUserData();
  },[])
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Homepage courses={courses} laoding={laoding}/>}/>
        </Routes>
      </div>
    );
  
}

export default App;
