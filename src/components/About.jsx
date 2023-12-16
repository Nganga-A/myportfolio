import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:pt-20 md:pt-10 lg:py-0 xl:py-0'> 
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse laboriosam nam obcaecati quas perferendis odit officiis rerum quia, nisi hic, commodi rem placeat cum, optio sint dolores molestiae corrupti temporibus velit tenetur? Adipisci perspiciatis nesciunt voluptas nostrum provident. Corrupti cumque fugiat culpa possimus explicabo suscipit eos, minus molestiae eaque!
            </p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident cum sit numquam impedit. Tenetur, omnis ducimus est nemo dolor similique fuga earum? Ipsa quasi quibusdam cumque odit ratione aut, fugiat porro voluptatibus recusandae, molestiae vitae consequuntur dolore! Delectus commodi consectetur quis repudiandae. Possimus ad sequi dolorem porro animi nobis! Architecto.
            </p>
        </div>
    </div>
  )
}

export default About