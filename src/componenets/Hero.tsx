import React from 'react'
import tube from '../assets/tube.png'


const Hero = () => {
  return (
    <section className='flex sm:py-16 py-6 items-start sm:px-16 px-10'>
      <div className='flex-col items-start'>
        <div className='text-3xl font-bold mb-2 text-dark-orange-gradient'>
          Custom Artisanal Clocks
        </div>
        <div>
          <p className='text-lg font-normal ml-6 mb-6 text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, voluptate quod quos dolorum voluptas
            voluptatibus quae quas fugit. Quisquam voluptatum, quibusdam, quia,
            voluptate quod quos dolorum voluptas voluptatibus quae quas fugit.
          </p>
        </div>
      </div>
      <div className='flex-col items-start w-[30rem]'>
        <img className='object-contain w-full flex-grow h-full sm:mx-20' src={tube} alt="" />
      </div>
    </section >
  )
}

export default Hero