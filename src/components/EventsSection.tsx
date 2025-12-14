import { motion } from "framer-motion";
import eventsBg from "@/assets/events-bg.jpg";

const events = {
  technical: [
    { id: 1, name: "Technical Event 1", date: "16.03.26", time: "10.00" },
    { id: 2, name: "Technical Event 2", date: "16.03.26", time: "12.00" },
    { id: 3, name: "Technical Event 3", date: "16.03.26", time: "14.00" },
  ],
  fun: [
    { id: 1, name: "Fun Event 1", date: "17.03.26", time: "16.00" },
    { id: 2, name: "Fun Event 2", date: "17.03.26", time: "16.30" },
  ],
  workshops: [
    { id: 1, name: "Workshop 1", date: "17.03.26", time: "14.00" },
    { id: 2, name: "Workshop 2", date: "17.03.26", time: "14.00" },
    { id: 3, name: "Workshop 3", date: "17.03.26", time: "14.00" },
  ],
};

const EventsSection = () => {
  return (
    <section id="events" className="relative min-h-screen py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${eventsBg})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Technical Events */}
          <div className="mb-12">
            <h3 className="text-accent font-display text-lg mb-6">Technical Events</h3>
            <div className="space-y-4">
              {events.technical.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-4 gap-4 items-center py-4 border-b border-border/30"
                >
                  <span className="text-foreground/60 font-display">{event.id}</span>
                  <span className="text-foreground font-medium col-span-1">{event.name}</span>
                  <span className="text-foreground/80 font-display text-right">{event.date}</span>
                  <span className="text-foreground/80 font-display text-right">{event.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fun Events */}
          <div className="mb-12">
            <h3 className="text-foreground/80 font-display text-lg mb-6">Fun Events</h3>
            <div className="space-y-4">
              {events.fun.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-4 gap-4 items-center py-4 border-b border-border/30"
                >
                  <span className="text-foreground/60 font-display">{event.id}</span>
                  <span className="text-foreground font-medium col-span-1">{event.name}</span>
                  <span className="text-foreground/80 font-display text-right">{event.date}</span>
                  <span className="text-foreground/80 font-display text-right">{event.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="text-foreground/80 font-display text-lg mb-6">Workshops</h3>
            <div className="space-y-4">
              {events.workshops.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-4 gap-4 items-center py-4 border-b border-primary/50"
                >
                  <span className="text-foreground/60 font-display">{event.id}</span>
                  <span className="text-foreground font-medium col-span-1">{event.name}</span>
                  <span className="text-foreground/80 font-display text-right">{event.date}</span>
                  <span className="text-foreground/80 font-display text-right">{event.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
