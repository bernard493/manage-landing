import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Review } from '../../Components';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const reviewDetails =[
  {
    imgUrl : '../../asserts/girl-791686_1920.jpg',
    name : 'Anisha Li',
    review : '“Manage has supercharged our team’s workflow. The ability tomaintain visibility on larger milestones at all times keepseveryone motivated.”'
  },
  
  {
    imgUrl : '../../asserts/happy-1836445_1920.jpg',
    name : 'Ali Bravo',
    review : '“We have been able to cancel so many other subscriptions sinceusing Manage. There is no more cross-channel confusion andeveryone is much more focused.”'
  },
  { 
    imgUrl : '../../asserts/man-2442565_1920.jpg',
    name : 'Richard Watts',
    review : ' “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keepseveryone motivated.”'
  }

]


export const Reviews = () => {

  const review = reviewDetails.map((review , index) => 
       <Review
          key={index}
          name={review.name}
          review={review.review}
          img={review.img}
       />
      )


  return (
    <div className='mx-[2rem] space-y-6 md:mx-[5rem]'>
      <div className='text-center font-bold '> 
        <h3 className='text-3xl '>What they've said</h3>
      </div>
      <div className='pt-10 space-y-10 md:flex justify-center items-center md:gap-x-6'>
        {review}
      </div>
      <div className='flex justify-center'>
        <button className=' w-[10rem] h-[2.5rem] text-[#fff] drop-shadow-lg bg-[#F3603C] rounded-full '>Get Started</button>
      </div>
    </div>
  )
}
