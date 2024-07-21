import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {

    
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  var targetUrl = 'http://127.0.0.1:4000/api/v1/signup';
console.log(formData.Name);
  const res = async () => {
    try {
      const resp = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          "Access-Control-Allow-Origin": '*',
        },
  
        body: JSON.stringify({
          
            name: formData.Name,
            email: formData.email,
            password: formData.password,
            role: "Student"
         
        })
      });
   
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
  
      const data = await resp.json();
      console.log(data);
    } catch (error) {

      console.error('Error:', error);
    }
  };
    
  function submitHandler(e) {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      return;
    }
   
     else{
     res();
     }
  }
  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Sign Up</h2>
        <form onClick={submitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name
            <input
              type="text"
              required
              placeholder="Enter Name"
              onChange={changeHandler}
              value={FormData.Name}
              name="Name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={formData.email}
              onChange={changeHandler}
              name='email'
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </label>
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number
            <input
              type="tel"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </label>
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password
            <input
              type="password"
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">confirmPassword
            <input
              type="password"
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            SIGN UP
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <Link to='/' className="text-blue-500 hover:underline">Sign In</Link>
        </p>
        </div>
    </div>
  );
}

export default Signup;