import React from 'react'
import img from '../../asserts/bg-simplify-section-desktop.svg'

export const GetStarted = () => {
  return (
    <section id="cta" class="bg-[#F3603C] mt-20">
    
    <div class="container flex flex-col items-center justify-between px-6 py-24   space-y-12 md:py-12 md:px-[10rem] md:flex-row md:space-y-0">
      
      <h2 class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Simplify how your team works today
      </h2>
    
      <div>
      <button className=' w-[10rem] h-[2.5rem] text-[#F3603C] drop-shadow-lg bg-[#fff] rounded-full '>Get Started</button>
      </div>
    </div>
  </section>
  )
}
