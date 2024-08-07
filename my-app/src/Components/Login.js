import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

const Login = () => {
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    function changeHandler(event) {
        setFormData([
            (prev) => [
                {
                    ...prev,
                    [event.target.name]: event.target.value,
                },
            ],
        ]);
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
         <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
         <form onClick={submitHandler}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">email
            <input
             required 
             type="email" 
            placeholder='Enter email id:'
            value={formData.email}
            name='email'
            onChange={changeHandler}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Password
            <input 
             required 
            type="password" 
               placeholder='Enter password id:'
               value={formData.password}
               name='password'
               onChange={changeHandler}
            
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </label>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forget Password?</a>
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Not a Member?&nbsp;&nbsp;&nbsp;<Link to='/signup' className="text-blue-500 hover:underline"><button> Signup
            </button>
            </Link>
             </p>
        </div>
    </div>
  )
}

export default Login
