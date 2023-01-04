import React from 'react'
import img1 from '../../asserts/avatar-ali.png'






export const Review = ({name,review,img}) => {






  return (
    <div className=' bg-[#EFF1F2] h-[15rem] w-[20rem]  rounded-xl space-y-10  '>
        <div className='flex justify-center'>
          <img src={img1} alt="" className='w-16 -mt-6' />
        </div>
        <div className='mx-3  text-center space-y-6'>
         <p className='font-bold md:text-md '>{name}</p>
         <p className='md:text-md'>{review}</p>
        </div>
      </div>
  )
}
