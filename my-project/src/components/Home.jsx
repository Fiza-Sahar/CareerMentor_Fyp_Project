import {Carousel} from "flowbite-react";
import React from 'react';
import Banner from '../assets/Images/Banner.png'


const  Home = () =>{
  return (
    <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-24">
      <div className="gradientBg rounded-x1 rounded-br-[60px] rounded-t-[20px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <div>
  <img src={Banner} alt="" className="lg:h-[386px]" />
</div>

     <div className="md:w-3/5">
  <h1 className="md:text-7x1 text-4x1 font-bold text-white mb-6 leading-relaxed h1-large" >Your Career, Our Guidance</h1>
  <p className="text-white text-2x1 mb-8 ">Craft a winning resume, conquer interviews, and land your dream job – all in one easy-to-use platform with personalized guidance.
</p>
  <div className="space-x-5 space-y-4">
    <button className="btnHome">Get Started</button>
   
  </div>
</div>



</div>
</div>
    </div>
  );

};

export default Home;
