import React from 'react'
import aboutusImg from '../../assets/Images/aboutusImg.jpg'; 
import './About.css'

function About() {
  return (
    <div  className='md:px-14 max-w-s mx-auto aboutus' id='about'>
      <h1 className="md:text-7x1 text-4x1 font-bold  mb-6 leading-relaxed h1-about text-center">About Us</h1>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'> 
        <div className='md:w-1/2'>
    <img src={aboutusImg} alt="" />
        </div>
        <div className='md:w-4/5 ' >
  <h2 class="md:text-7x1 text-4x1 font-bold text-[#004A98] mb-6 leading-relaxed h2-large ">Unleash Your Career Potential with Our All-in-One Platform.</h2>
  <p class="text-tartary text-lg mb-7 ">Frustrated with crafting resumes and acing interviews? We built a one-stop platform to empower you!  Create impactful resumes, master common interview questions across fields, and practice with confidence – all in one place. Simplify your job search and take control of your career journey today.</p>
  <button className="btnAbout">Explore Us</button>
</div>
</div>

    </div>
  )
}

export default About
