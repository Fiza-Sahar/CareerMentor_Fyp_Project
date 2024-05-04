import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './Searchbar.css';

const Searchbar = () => {
  return (



    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
      
      <div className='color'> <p>Find the one that <br></br>best for you!</p>
        <p className='font'> Explore diverse job opportunities tailored to your skills and bright the career......!  </p>
      </div>

      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] 
        bg-white p-5 shadow-greyIsh-700'>

          <div className='flex gap-2 items-cent margin:auto rounded-[50px]'>
            {/* <AiOutlineSearch className='text-[25px] icon' /> */}
            <input type='text' className='bg-transparent text-blue-500
      focus:outline-none w-[100%]' placeholder='Search Job Here...' />
            {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
      hover:text-textColor icon'/> */}
  
  </div>
  <div className='flex gap-2 items-cent margin:auto rounded-[50px]'>
  <input type='text' className='bg-transparent text-blue-500
      focus:outline-none w-[100%]' placeholder='Search Job Here...' />
  </div>
  <button className='bg-blueColor h-full p-5 px-10 rounded-[10px]
  cursor-pointer hover:bg-blue-300'>Search</button>
 
        </div>
      </form>
    </div>
  )
}

export default Searchbar;