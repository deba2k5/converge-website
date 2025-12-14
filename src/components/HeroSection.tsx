import { ArrowRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-f1.jpg";
import driverImage from "@/assets/driver-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden p-4">
      {/* Main content area */}
      <div className="flex min-h-[calc(100vh-2rem)] gap-4">
        {/* Left side - Hero image */}
        <div className="relative flex-1 rounded-[2rem] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-racing-dark/95 via-racing-dark/70 to-transparent" />

          {/* Content overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-sm md:text-base mb-4"
            >
              Get ready for
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4"
            >
              CONV<span className="text-primary">E</span>RGE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-lg md:text-xl italic text-primary mb-6"
            >
              Flagship event of IEEE CS IEM
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/70 max-w-md text-sm md:text-base leading-relaxed mb-8"
            >
              <span className="text-primary font-semibold">IEEE CS, IEM</span> has returned with yet another
              version of CONVERGE, A true technical extravaganza in all senses. This time, inspired
              by the legacy of the FORMULA 1 Racing. Be a part of it and acquire an experience to cherish
              for your lifetime
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-white/20 border border-white/30">
                Be a part
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent text-white font-medium px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-white/10 border border-white/30">
                Brochure
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Checkout events banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-6"
          >
            <div className="bg-primary rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
              <div>
                <p className="font-semibold text-primary-foreground text-sm">Checkout the events</p>
                <p className="text-primary-foreground/70 text-xs">
                  Take a look at what to expect from
                  <br />
                  CONVERGE, 2025
                </p>
              </div>
              <ArrowDownRight className="w-6 h-6 text-primary-foreground" />
            </div>
          </motion.div>
        </div>

        {/* Right side - Driver image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden lg:flex items-end justify-center w-72 xl:w-80 pb-8"
        >
          <div className="relative w-full h-[420px]">
            {/* Gradient background frame */}
            <div
              className="absolute inset-0 rounded-[2rem] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(38 92% 50%) 0%, hsl(280 70% 50%) 100%)",
                padding: "4px",
              }}
            >
              <div className="w-full h-full rounded-[1.875rem] overflow-hidden">
                <img
                  src={driverImage}
                  alt="F1 Driver"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
