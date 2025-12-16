import { ArrowRight, ArrowDownRight, ArrowRightCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-f1.jpg";
import driverImage from "@/assets/driver-portrait.jpg";
import Navbar from "./Navbar";
import redbullPic from "../assets/bgs/redbull picture.jpg"
// import ferrariPic from "../assets/bgs/ferrari-bg.jpg"
import mercedesPic from "../assets/bgs/mercedes-bg.jpeg"
import mclarenPic from "../assets/bgs/mclaren-bg.jpeg"
import SocialBar from "./SocialBar";
import redBullDriver from "../assets/drivers/redbull-driver.webp"

const HeroSection = () => {
  
  const crest = localStorage.getItem("converge_crest");
  const bgUrl = crest == "redbull" ? redbullPic : crest == "ferrari" ? redBullDriver : crest == "mercedes" ? mercedesPic : crest == "mclaren" ? mclarenPic : redbullPic; 
  
  return (
    <div className="flex py-10 px-20 items-center justify-center 
    h-[100vh] w-[100vw] bg-white overflow-hidden">
    
    <div className="bg-gray-300 rounded-[2rem] relative 
      h-full w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        <div className="absolute flex flex-col
        left-[10%] top-[15%]
        w-[50%] h-[70%] rounded-[2rem] p-4">
              {/* Get ready for */}
              <div className="w-full p-1">
                <h4 className="text-lg font-formula1 font-bold text-white">
                  Get ready for
                </h4>
              </div>

              {/* Converge - main heading */}
              <div className="w-full mb-4">
                <h2 className="text-[6.5rem] leading-none 
                font-formula1 font-bold text-white">
                  CONVERGE
                </h2>
              </div>

              {/* Flagship event line */}
              <div className="w-full mb-6">
                <h2 className="text-[1.2rem] leading-none 
                font-formula1 font-bold text-white">
                  Flagship event of IEEE Computer Society IEM
                </h2>
              </div>

              
              <div className="ml-[15%] w-[70%] p-2">

                {/* short description */}
                <div className="w-full mb-6">
                <h2 className="text-[1rem] leading-relaxed 
                font-formula1 text-white">
                  IEEE CS, IEM has returned with yet another version of CONVERGE, 
                  A true technical extravaganza in all senses. This time, 
                  inspired by the legacy of the FORMULA 1 Racing. 
                  Be a part of it and acquire an experience to cherish for your lifetime 
                </h2>
                </div>

                {/* CTA Buttons - Register and downloa brochure */}
                <div className="w-full flex justify-start gap-4">
                  <button className="flex justify-between items-center 
                  bg-gray-400 text-white 
                  px-6 py-4 rounded-full font-formula1
                  hover:bg-red-600 transition-colors 
                  duration-300">
                    Register
                    <span className="ml-4">
                      <ArrowRightCircleIcon className="w-5 h-5" />
                    </span>

                  </button>
                  <button className="flex justify-between items-center 
                  bg-transparent text-white 
                  px-6 py-2 rounded-full border-2 border-white font-formula1
                  hover:bg-blue-600 transition-colors 
                  duration-300">
                    Download Brochure
                    <span className="ml-4">
                      <ArrowRightCircleIcon className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
        </div>


      <div className="absolute flex top-0 right-0 bg-white pl-6 pb-6
      rounded-bl-[2rem]">
      <div className="h-full w-full rounded-bl-[2rem]
      bg-black z-50 overflow-hidden">
        <Navbar/>
      </div>
      </div>

      <div className="absolute w-[20%] aspect-square 
      flex bottom-0 right-0 bg-white pl-6 pt-6
      rounded-tl-[2rem]">
      <div className="w-full rounded-br-[2rem] rounded-tl-[2rem] 
      bg-black z-50 overflow-hidden">
        {crest && 
        crest == "redbull" ? 
        <img src={redbullPic} alt="Crest" className="w-full h-full object-cover"/> :
        crest == "ferrari" ? 
        <img src={redBullDriver} alt="Crest" className="w-full h-full object-cover" /> :
        crest == "mercedes" ? 
        <img src={mercedesPic} alt="Crest" className="w-full h-full object-cover" /> :
        crest == "mclaren" ? 
        <img src={mclarenPic} alt="Crest" className="w-full h-full object-cover" /> :
        <img src={redbullPic} alt="Crest" className="w-full h-full object-cover" />}
      </div>
      </div>


      <div className="absolute w-[5%] h-[35%]
      flex bottom-32 left-0 bg-white pr-6 py-6
      rounded-tr-[2rem] rounded-br-[2rem]">    
      <div className="h-full w-full rounded-r-[2rem]
      bg-black z-50 overflow-hidden">
        <SocialBar/>
      </div>
      </div>


      <div className="absolute left-0 bottom-0 w-[30%] h-[14%] bg-white  
      rounded-tr-[2rem] z-50 overflow-hidden pr-6 pt-6">  
        <div className="flex-col w-full h-full bg-yellow-500 p-4 px-8 
        rounded-[2rem] z-50 
        cursor-pointer hover:bg-orange-400 overflow-hidden">
          <h1 className="text-[1rem] font-formula1 
          font-bold text-black">
            Checkout the events
          </h1>

          <h3 className="text-[0.65rem] font-formula1 
          text-black">
            Take a loot at what to expect from CONVERGE 2026
          </h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
