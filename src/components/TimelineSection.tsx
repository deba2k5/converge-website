import { motion } from "framer-motion";
import { useState } from "react";

const days = ["Day 1", "Day 2", "Day 3"];

const timelineData = {
  "Day 1": [
    { id: 1, title: "Inauguration", description: "Lets get going!", type: "amber", x: 10, y: 70 },
    { id: 2, title: "Lunch", description: "Lunch is on us!", type: "red", x: 30, y: 45 },
    { id: 3, title: "Technical Session", description: "Deep dive into tech", type: "white", x: 20, y: 85 },
    { id: 4, title: "Workshop", description: "Hands-on learning", type: "amber", x: 50, y: 60 },
  ],
  "Day 2": [
    { id: 1, title: "Hackathon Begins", description: "Code your way!", type: "amber", x: 15, y: 40 },
    { id: 2, title: "Mentorship", description: "Expert guidance", type: "red", x: 55, y: 35 },
    { id: 3, title: "Fun Events", description: "Take a break!", type: "white", x: 75, y: 55 },
  ],
  "Day 3": [
    { id: 1, title: "Finals", description: "Show what you got!", type: "red", x: 25, y: 50 },
    { id: 2, title: "Prize Distribution", description: "Winners announced!", type: "amber", x: 60, y: 40 },
    { id: 3, title: "Closing Ceremony", description: "Until next time!", type: "white", x: 80, y: 65 },
  ],
};

const TimelineSection = () => {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <section className="bg-racing-gray py-8">
      <div className="bg-muted rounded-3xl mx-4 md:mx-8 p-8 md:p-12 min-h-[600px] relative overflow-hidden">
        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          <div className="bg-card rounded-full p-2 flex gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 rounded-full font-display text-sm transition-all duration-300 ${
                  activeDay === day
                    ? "bg-foreground text-background"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline visualization */}
        <div className="relative h-[400px]">
          {/* SVG Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M 0 90 Q 15 75 25 80 T 45 55 T 65 70 T 85 45 T 100 30"
              fill="none"
              stroke="white"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Event cards */}
          {timelineData[activeDay as keyof typeof timelineData]?.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="absolute"
              style={{ left: `${event.x}%`, top: `${event.y}%` }}
            >
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full mb-2 ${
                  event.type === "amber"
                    ? "bg-primary"
                    : event.type === "red"
                    ? "bg-accent"
                    : "bg-foreground"
                }`}
              />
              {/* Card */}
              <div className="bg-secondary/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg min-w-[140px]">
                <p className="font-semibold text-secondary-foreground text-sm">{event.title}</p>
                <p className="text-secondary-foreground/60 text-xs">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
