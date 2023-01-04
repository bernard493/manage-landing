import React, {useState} from 'react'
import {AiFillInstagram ,AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai'
import {BsPinterest ,BsFacebook} from 'react-icons/bs'





export const Footer = () => {
  const [email, setEmail] = useState("");

  function submitEmail(){
    if(email.length > 0){
      alert('Thanks for submitting your email')
    }
  }

  return (
    <footer className="bg-[#24292F]">
    
      <div className="container flex flex-col-reverse justify-between px-[5rem] py-10 mx-auto space-y-8 md:flex-row md:space-y-0 md:px-[10rem]">
     
        <div className="flex flex-col-reverse text-white items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center  md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          
          
          
          <div className="flex justify-center space-x-4">
              <a href="#">
                <AiFillInstagram className="text-[2rem] " alt="" />
              </a>
            
            <a href="#">
              <AiFillYoutube className="text-[2.2rem]" />
            </a>
            
            <a href="#">
              <AiFillTwitterCircle className="text-[2rem]" />
            </a>
           
            <a href="#">
              <BsPinterest className="text-[2rem]" />
            </a>
            
            <a href="#">
              <BsFacebook className="text-[2rem]" />
            </a>
            
           
          </div>
        </div>
        
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-[#F3603C]">Home</a>
            <a href="#" className="hover:text-[#F3603C]">Pricing</a>
            <a href="#" className="hover:text-[#F3603C]">Products</a>
            <a href="#" className="hover:text-[#F3603C]">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-[#F3603C]">Careers</a>
            <a href="#" className="hover:text-[#F3603C]">Community</a>
            <a href="#" className="hover:text-[#F3603C]">Privacy Policy</a>
          </div>
        </div>

        
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3 justify-center">
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                required
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-[#F3603C] hover:bg-brightRedLight focus:outline-none"
                onClick={submitEmail}
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
