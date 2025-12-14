import { ArrowRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-f1.jpg";
import driverImage from "@/assets/driver-portrait.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-racing-gray overflow-hidden">
      {/* Main content area */}
      <div className="flex min-h-screen">
        {/* Left side - Hero image */}
        <div className="relative flex-1 m-4 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${heroImage})`
        }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          
          {/* Content overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="text-foreground/80 text-sm md:text-base mb-4">
              Get ready for
            </motion.p>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-4">
              CONV<span className="text-primary">E</span>RGE
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="font-display text-lg md:text-xl italic text-primary mb-6">
              Flagship event of IEEE CS IEM
            </motion.p>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="text-foreground/70 max-w-md text-sm md:text-base leading-relaxed mb-8">
              <span className="text-primary font-semibold">IEEE CS, IEM</span> has returned with yet another
              version of CONVERGE, A true technical extravaganza in all senses. This time, inspired
              by the legacy of the FORMULA 1 Racing. Be a part of it and acquire an experience to cherish
              for your lifetime
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-wrap gap-4">
              <button className="cta-button group">
                Be a part
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="cta-button-outline group text-justify shadow-md rounded-md">
                Brochure
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right side - Driver image */}
        <motion.div initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.7,
        duration: 0.6
      }} className="hidden lg:flex items-end justify-center w-80 xl:w-96 relative">
          <div className="absolute bottom-8 right-8 w-64 xl:w-72 h-80 xl:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30" />
            <img src={driverImage} alt="F1 Driver" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Checkout events banner */}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.8
    }} className="absolute bottom-8 left-4 md:left-8">
        <div className="bg-primary rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
          <div>
            <p className="font-semibold text-primary-foreground text-sm">Checkout the events</p>
            <p className="text-primary-foreground/70 text-xs">
              Take a look at what to expect from<br />
              CONVERGE, 2025
            </p>
          </div>
          <ArrowDownRight className="w-6 h-6 text-primary-foreground" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;