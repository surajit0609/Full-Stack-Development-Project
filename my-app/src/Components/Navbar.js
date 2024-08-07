import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800">TOUR PACKAGES FROM BENGALURU</h1>
        <div className="mt-2">
          <hr className="border-t-2 border-blue-500 w-24 mx-auto" />
        </div>
        <p className="mt-2 text-gray-600">KARNATAKA STATE TOURISM DEVELOPMENT CORPORATION</p>
      </div>
    </nav>
  );
}

export default Navbar;
