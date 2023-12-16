import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pt-40'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:pt-20 md:pt-10 lg:py-0 xl:py-0'> 
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
            A versatile full-stack software developer with a strong foundation in software development and a passion
for creating efficient and high-quality solutions.My expertise encompasses a comprehensive understanding
of software engineering principles and methodologies, which I adeptly apply to surmount complex
problems.I thrive as a collaborative team-player, excelling in dynamic environments and derive genuine
passion from tackling intricate technical challenges.
            </p>
            <br/>
            <p className='text-xl'>
            Beyond my technical prowess, I'm dedicated to continuous learning and staying at the forefront of emerging technologies. I have a keen eye for clean and maintainable code, coupled with a commitment to delivering scalable solutions. I believe in the power of collaboration, and my experiences have taught me the importance of effective communication and adaptability. Explore my portfolio to get a glimpse of my coding journey.
            </p>
        </div>
    </div>
  )
}

export default About