import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { HiMiniArrowRight } from "react-icons/hi2";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div>
            <div>
                <h2>I'm a Full Stack Developer</h2>
                <p>My expertise encompasses a comprehensive understanding
of software engineering principles and methodologies, which I adeptly apply to surmount complex
problems.I thrive as a collaborative team-player, excelling in dynamic environments and derive genuine
passion from tackling intricate technical challenges.</p>

                <div>
                    <button>
                        Portfolio
                        <span> <HiMiniArrowRight /> </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home