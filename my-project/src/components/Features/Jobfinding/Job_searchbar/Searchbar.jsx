import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Searchbar.css';
import { useState } from 'react';
function Searchbar() {
  const [role, setRole] = useState('');
  return (
    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <div className='color'>
        <p>Find the <span className='cstyle'>One</span> that's <br></br><span className='cstyle'>Best</span> for you!</p>

        <p className='font'> Explore diverse job opportunities tailored to your skills and bright the career......!  </p>
      </div>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[80px] gap-[10px] 
        bg-white p-5 shadow-grey-700 w-[100%] h-200'>

          <div className='flex gap-1 items-cent margin:auto rounded-[70px] rou'>
            <input className='rou w-[100px]' type='text' placeholder='Job Title,Keywords' /> 
            <AiOutlineSearch className='text-[25px] icon' />
          </div>

          <div className='row'>
            <div className='col-6'>
              <select className="rou" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Industry Type</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Software Quality Engineering">Software Quality Engineering</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Product Manager">Product Manager</option>
              </select>
            </div>

          </div>
          <button className='background' type="button">Search</button>


        </div>
      </form>
    </div>
  )
}

export default Searchbar;