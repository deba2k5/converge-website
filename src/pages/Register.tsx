import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, User, Mail, Phone, School, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";

const teams = [
  { id: "mercedes", name: "Mercedes", color: "hsl(170, 70%, 40%)" },
  { id: "redbull", name: "Red Bull", color: "hsl(260, 70%, 50%)" },
  { id: "mclaren", name: "McLaren", color: "hsl(30, 90%, 50%)" },
  { id: "ferrari", name: "Ferrari", color: "hsl(0, 70%, 45%)" },
];

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    team: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Add registration logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialBar />

      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              Be a <span className="text-primary">Part</span>
            </h1>
            <p className="text-foreground/70 mb-8">
              Register for CONVERGE 2025 and join the technical extravaganza
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div className="space-y-2">
              <label className="text-foreground/80 text-sm flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-foreground/80 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-foreground/80 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your phone number"
              />
            </div>

            {/* College */}
            <div className="space-y-2">
              <label className="text-foreground/80 text-sm flex items-center gap-2">
                <School className="w-4 h-4" />
                College / University
              </label>
              <input
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your college name"
              />
            </div>

            {/* Team Selection */}
            <div className="space-y-3">
              <label className="text-foreground/80 text-sm flex items-center gap-2">
                <Users className="w-4 h-4" />
                Choose Your Team
              </label>
              <div className="grid grid-cols-2 gap-3">
                {teams.map((team) => (
                  <button
                    key={team.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, team: team.id })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.team === team.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    style={{
                      borderColor: formData.team === team.id ? team.color : undefined,
                      backgroundColor: formData.team === team.id ? `${team.color}20` : undefined,
                    }}
                  >
                    <span className="font-display font-bold text-foreground">{team.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </main>
    </div>
  );
};

export default Register;
