import React from 'react'
import { Button } from './ui/button'
import Button2 from './ui/button2'

function Hero() {
  return (
    <div className='flex items-center mx-50 gap-9'>
        <div className='flex flex-col justify-center items-start p-5'>
            <h1 className='font-extrabold text-[50px] text-center'>
                <span className='text-[#f56551]'>
                    Wander More, Worry Less 
                </span>
                <span className=''><br></br>
                    Your Journey Starts Here.
                </span>
            </h1>
            <button className=' py-2 px-4 rounded-full flex items-center  text-white 
            font-semibold hover:!bg-white/80 hover:!text-black hover:border border-yellow-500'>
                Hai
            </button>
             </div>
        <div className='flex justify-center items-center rounded-lg p-5' >
            <img src="/hero-1.jpg" alt="hero_img" className='rounded-lg w-3xl' />
        </div>
    </div>
  )
}

export default Hero