import React from 'react'

export const Features = () => {
  return (
    <div className='my-[3rem] flex flex-col  justify-center  md:flex-row items-center justify-center  md:my-[3rem] md:mx-[7rem]'>
      <div className=' mx-[1.5rem]  space-y-5 md:w-1/2 md:-mt-[15rem]'>
        <h3 className='text-3xl font-bold text-center md:text-start md:text-5xl md:w-[40rem]'>Whats different about Manage?</h3>
        <p className='text-md text-center md:text-start md:text-xl md:w-[33rem]'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link</p>
      </div>

      <div  className=' my-[2rem] mx-[1.5rem] space-y-5 md:w-1/2'>
            <div className=' my-[2rem] mx-[1.5rem] space-y-6 '>
              <div className='flex items-center space-x-3 bg-[#F2DFCE] h-10 w-[24rem] rounded-l-full font-bold md:bg-transparent'>
                <div className='bg-[#F3603C] px-5 py-1.5 w-[4rem] rounded-full h-10 text-[#fff] text-lg'>01</div>
                <h3 className='text-md md:text-xl'> Track company-wide progress</h3>
              </div>
              <p className='text-center px-5 text-md md:ml-[3rem]  md:w-[30rem] md:text-left'>See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way down to the
                    smallest of details. Never lose sight of the bigger picture
                    again.</p>
           </div>
          <div  className=' my-[2rem] mx-[1.5rem] space-y-5 '>
              <div className='space-y-6 '>
                <div className='flex items-center space-x-3 bg-[#F2DFCE] h-10 w-[24rem] rounded-l-full font-bold md:bg-transparent'>
                  <div className='bg-[#F3603C] px-5 py-1.5 w-[4rem] rounded-full h-10 text-[#fff] text-lg'>02</div>
                  <h3 className='text-md md:text-xl'>Advanced built-in reports</h3>
                </div>
                <p className='text-center px-5 text-md md:ml-[3rem]  md:w-[30rem] md:text-left'>See how your day-to-day tasks fit into the wider vision. Go from
                Set internal delivery estimates and track progress toward
                      company goals. Our customizable dashboard helps you build out
                      the reports you need to keep key stakeholders informed.</p>
            </div>
          </div>
          <div  className=' my-[2rem] mx-[1.5rem] space-y-5'>
              <div className='space-y-6 '>
                <div className='flex items-center space-x-3 bg-[#F2DFCE] h-10 w-[24rem] rounded-l-full font-bold md:bg-transparent md:w-[25rem]'>
                  <div className='bg-[#F3603C] px-5 py-1.5 w-[4rem] rounded-full h-10 text-[#fff] text-lg'>03</div>
                  <h3 className='text-md md:text-xl'>Everything you need in one place</h3>
                </div>
                <p className='text-center px-5 text-md md:ml-[3rem]   md:w-[30rem] md:text-left'>See how your day-to-day tasks fit into the wider vision. Go from
                Stop jumping from one service to another to communicate, store
                      files, track tasks and share documents. Manage offers an
                      all-in-one team productivity solution.</p>
            </div>
          </div>
     </div>
    </div>

  )
}
