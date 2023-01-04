import React from "react";
import { Features, Footer,GetStarted,Hero,Reviews} from "./Containers/index";
import {Navbar}  from './Components/index'


function App() {
  return (
    <div className="">
      <div className="bg-[url('./asserts/bg-tablet-pattern.svg')]">
           <div className="">
           <Navbar/>
           <Hero/>
           </div>
      </div>
      <Features/>
      <Reviews/>
      <GetStarted/>
      <Footer/>
      
    </div>
  );
}

export default App;
