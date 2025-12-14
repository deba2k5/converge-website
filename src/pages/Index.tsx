import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import HeroCarousel from "@/components/HeroCarousel";
import EventsSection from "@/components/EventsSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSelection from "@/components/TeamSelection";
import SponsorshipSection from "@/components/SponsorshipSection";
import PartnersSection from "@/components/PartnersSection";
import VideoLoader from "@/components/VideoLoader";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showLoader, setShowLoader] = useState(false);
  const [hasCrest, setHasCrest] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const crest = localStorage.getItem("converge_crest");
    if (crest) {
      setHasCrest(true);
      setShowLoader(false);
    } else {
      setShowLoader(true);
    }
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "events", "team", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        } else if (section === "home" && scrollPosition < 400) {
          setActiveSection("home");
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showLoader) {
    return <VideoLoader onDone={() => navigate("/select-crest", { replace: true })} />;
  }

  return (
    <>
      <main className="bg-background min-h-screen">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        <SocialBar />
        
        <div id="home">
          <HeroCarousel />
        </div>
        <EventsSection />
        <TimelineSection />
        <TeamSelection />
        <SponsorshipSection />
        <PartnersSection />
      </main>
    </>
  );
};

export default Index;
