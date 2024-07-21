import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forget Password?</a>
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Not a Member? <Link to="/signup" className="text-blue-500 hover:underline">
          <button>
          Signup
          </button>
          </Link> </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar
