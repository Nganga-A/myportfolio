import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pt-40 my-1'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:pt-20 md:pt-10 lg:py-0 xl:py-0'> 
            <div className='pb-0'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
            A versatile full-stack software developer with a robust foundation in software development and a commitment to crafting efficient, high-quality solutions. My skill set encompasses a profound understanding of software engineering principles and methodologies, skillfully applied to overcome intricate challenges. Thriving in collaborative settings, I excel in dynamic environments, deriving genuine passion from addressing complex technical issues.
            </p>
            <br/>
            <p className='text-xl'>
            In addition to my technical acumen, I am dedicated to continuous learning, always at the forefront of emerging technologies. With a discerning eye for clean, maintainable code, I am steadfast in delivering scalable solutions. I emphasize the power of collaboration, recognizing the significance of effective communication and adaptability through my experiences. Explore my portfolio to gain insight into my coding journey            </p>
        </div>
    </div>
  )
}

export default About