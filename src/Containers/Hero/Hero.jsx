import React from 'react'
import chart from '../../asserts/illustration-intro.svg'

export const Hero = () => {
  return (
    <div className='flex flex-col-reverse items-center  my-[2rem] mx-[1.5rem]  md:flex-row items-center gap-10 justify-between  md:my-[3rem] mx-[7rem]'>
      <div className='space-y-10 w-[20rem] md:w-1/2 '>
        <h1 className='text-4xl font-bold text-center md:text-5xl md:text-start'>Bring everyone together to build better products</h1>
        <p className='text-xl  text-center md:text-xl md:text-start'>Bring everyone together to build better products Bring everyone together to build better products</p>
        <div className='flex justify-center  md:justify-start '>
        <button className=' w-[10rem] h-[2.5rem] text-[#fff] drop-shadow-2xl bg-[#F3603C] rounded-full'>Get Started</button>
        </div>
      </div>
      <div className='pt-5  w-[20rem] md:w-1/2 flex justify-center'>
        <img src={chart} alt="" className=' h-[17rem] md:w-[30rem] md:h-[30rem]' />
      </div>
    </div>
  )
}
