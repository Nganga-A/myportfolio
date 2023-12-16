import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { HiMiniArrowRight } from "react-icons/hi2";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>My expertise encompasses a comprehensive understanding
of software engineering principles and methodologies, which I adeptly apply to surmount complex
problems.I thrive as a collaborative team-player, excelling in dynamic environments and derive genuine
passion from tackling intricate technical challenges.</p>

                <div>
                    <button className= 'group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiMiniArrowRight size={20} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="myprofile" className='rounded-2xl mx-auto w-2/3 ' />
            </div>

        </div>
    </div>
  )
}

export default Home