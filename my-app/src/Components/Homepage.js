import React from 'react'
import Navbar from './Navbar'
import Spinner from './Spinner';
import Cards from './Cards';
const Homepage = (propos) => {
  const courses=propos.courses;
  const laoding=propos.laoding;
  return (
    <div className="min-h-screen min-w-full bg-gray-500 flex flex-col" >
      <Navbar />
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        <div>
         <img src={courses[0].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Homepage