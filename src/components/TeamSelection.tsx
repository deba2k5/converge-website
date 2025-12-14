import { motion } from "framer-motion";
import { useState } from "react";

const teams = [
  {
    id: "mercedes",
    name: "Mercedes",
    color: "bg-gradient-to-b from-slate-700 to-slate-900",
    logo: "AMG PETRONAS",
  },
  {
    id: "redbull",
    name: "Red Bull",
    color: "bg-gradient-to-b from-red-700 to-red-900",
    logo: "ORACLE Red Bull Racing",
  },
  {
    id: "mclaren",
    name: "McLaren",
    color: "bg-gradient-to-b from-orange-100 to-white",
    logo: "McLaren",
    dark: true,
  },
  {
    id: "ferrari",
    name: "Ferrari",
    color: "bg-gradient-to-b from-red-600 to-red-800",
    logo: "Scuderia Ferrari",
  },
];

const TeamSelection = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <section id="team" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
        >
          CHOOSE YOUR CREST
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedTeam(team.id)}
              className={`${team.color} rounded-3xl aspect-[3/4] p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedTeam === team.id ? "ring-4 ring-primary shadow-2xl" : ""
              }`}
            >
              <div className="h-full flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center">
                  <span
                    className={`font-display text-lg md:text-xl font-bold text-center ${
                      team.dark ? "text-background" : "text-foreground"
                    }`}
                  >
                    {team.logo}
                  </span>
                </div>
                <div className="text-center">
                  <span
                    className={`font-display text-sm ${
                      team.dark ? "text-background/70" : "text-foreground/70"
                    }`}
                  >
                    FORMULA ONE TEAM
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSelection;
