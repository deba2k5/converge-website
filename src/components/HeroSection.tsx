import { ArrowRight, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import slideRedbull from "@/assets/slide-redbull.png";
import slideMercedes from "@/assets/slide-mercedes.png";
import slideMclaren from "@/assets/slide-mclaren.png";
import slideFerrari from "@/assets/slide-ferrari.png";

interface SlideData {
  id: string;
  bgImage: string;
  accentColor: string;
  teamColor: string;
}

const slides: SlideData[] = [
  {
    id: "redbull",
    bgImage: slideRedbull,
    accentColor: "from-purple-900/90 via-blue-900/60",
    teamColor: "hsl(260, 70%, 50%)",
  },
  {
    id: "mercedes",
    bgImage: slideMercedes,
    accentColor: "from-teal-900/90 via-emerald-900/60",
    teamColor: "hsl(170, 70%, 40%)",
  },
  {
    id: "mclaren",
    bgImage: slideMclaren,
    accentColor: "from-orange-900/90 via-amber-900/60",
    teamColor: "hsl(30, 90%, 50%)",
  },
  {
    id: "ferrari",
    bgImage: slideFerrari,
    accentColor: "from-red-900/90 via-rose-900/60",
    teamColor: "hsl(0, 70%, 45%)",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleBeAPart = () => {
    navigate("/register");
  };

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-racing-gray overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-foreground/80 text-sm md:text-base mb-4">
                Get ready for
              </p>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-4">
                CONV<span style={{ color: slides[activeIndex].teamColor }}>E</span>RGE
              </h1>

              <p className="font-display text-lg md:text-xl italic mb-6" style={{ color: slides[activeIndex].teamColor }}>
                Flagship event of IEEE CS IEM
              </p>

              <p className="text-foreground/80 max-w-md text-sm md:text-base leading-relaxed mb-8">
                <span className="font-semibold" style={{ color: slides[activeIndex].teamColor }}>IEEE CS, IEM</span> has returned with yet another
                version of CONVERGE, A true technical extravaganza in all senses. This time, inspired
                by the legacy of the FORMULA 1 Racing. Be a part of it and acquire an experience to cherish
                for your lifetime
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={handleBeAPart} className="cta-button group">
                  Be a part
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="cta-button-outline group">
                  Brochure
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "bg-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Checkout events banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-4 md:left-8 z-20"
      >
        <button 
          onClick={scrollToEvents}
          className="bg-primary rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg hover:bg-primary/90 transition-colors"
        >
          <div className="text-left">
            <p className="font-semibold text-primary-foreground text-sm">Checkout the events</p>
            <p className="text-primary-foreground/70 text-xs">
              Take a look at what to expect from<br />
              CONVERGE, 2025
            </p>
          </div>
          <ArrowDownRight className="w-6 h-6 text-primary-foreground" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
