import React from 'react';
import Avatar from '../assets/Avatar.png';
import { HiMiniArrowRight } from "react-icons/hi2";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row p-0'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-6 max-w-md text-xl'>Passionate about turning ideas into impactful solutions. Join me in this coding journey where creativity meets functionality and let's build something extraordinary together.</p>

                <div>
                    <Link to="portfolio" smooth duration={500}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiMiniArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={Avatar} alt="myprofile" className='rounded-2xl mx-auto w-2/3 ' />
            </div>

        </div>
    </div>
  )
}

export default Home