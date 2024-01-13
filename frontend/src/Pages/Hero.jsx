import Creatives from "./Creatives"
import Faqs from "./Faqs"
import Services from "./Services"
import Slider from "./Slider"

import draw3 from "../assets/draw3.svg"


function Hero() {


  return (
        <>
      <div className=" min-h-screen w-full flex bg-background dark:bg-primary ">
        
        <div className="w-1/2  flex flex-col items-start p-16 justify-center">
          <h1 className="text-6xl font-bold  text-primary bg-background  dark:text-background dark:bg-primary font-serif">Connect. Create. Collaborate</h1> 
          <div className="w-full flex  gap-6">
          <button className="px-6 py-3  bg-secondary  text-primary  mb-32 dark:text-primary dark:bg-secondary rounded-xl mt-8">Get started</button>
          <button className="px-6 py-3  bg-primary  text-secondary  mb-32 dark:text-secondary dark:bg-accent rounded-xl mt-8">Log In</button>
</div>
          
        </div>
        
        <div className="w-1/2  flex items-center justify-center relative ">

        <img className="h-1/2 border  bg-accent/5 rounded-xl  mb-32" src={draw3} alt="" />
        </div>
    </div>


      <Slider   />
      <Services />
      <Creatives />
      <Faqs />

    
    </>
  )
}

export default Hero
