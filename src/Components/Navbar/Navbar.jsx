import React, { useState } from 'react'
import logo from '../../asserts/logo.svg'
import {HiMenu} from 'react-icons/hi'
import {ImCancelCircle} from 'react-icons/im'






export const Navbar = () => {
const [mobileMenu ,setMobileMenu] = useState(false);

function toggle(){
  setMobileMenu(prev => !prev)
}


 


  return (
    <div className='f py-[2rem] mx-[1.5rem] md:mx-[5rem] '>
      <div className='flex justify-between items-center  md:flex justify-center items-center '>
          <div>
            <img src={logo} alt="" className=' md:w-[12rem]' />
          </div>
          <div className='hidden  md:flex gap-4 items-center text-lg font-base'>
              <a href="#" class="hover:text-[#F3603C]">Pricing</a>
              <a href="#" class="hover:text-[#F3603C]">Product</a>
              <a href="#" class="hover:text-[#F3603C]">About Us</a>
              <a href="#" class="hover:text-[#F3603C]">Careers</a>
              <a href="#" class="hover:text-[#F3603C]">Community</a>
          </div>
          <div>
            <button className='hidden w-[8rem] h-[2.5rem] text-[#fff] drop-shadow-lg bg-[#F3603C] rounded-full md:block'>Get Started</button>
          </div>
          <div className='md:hidden'>
            {!mobileMenu ? <HiMenu className='w-[2rem] h-[2rem] ease-in duration-300' onClick={toggle}/> :
            <ImCancelCircle className='w-[2rem] h-[2rem] ease-in duration-300' onClick={toggle}/>}
            
          </div>
      </div>

      <div>
         {mobileMenu && 
         (<div className=' bg-[#fff]  flex justify-center mt-5 rounded-xl shadow-2xl'>
            <ul className='text-center  space-y-4 text-xl py-[3rem]'>
                <li href="#" class="hover:text-[#F3603C]">Pricing</li>
                <li href="#" class="hover:text-[#F3603C]">Product</li>
                <li href="#" class="hover:text-[#F3603C]">About Us</li>
                <li href="#" class="hover:text-[#F3603C]">Careers</li>
                <li href="#" class="hover:text-[#F3603C]">Community</li>
            </ul>
         </div>)

         }
      </div>
      
    </div>
  )
}
