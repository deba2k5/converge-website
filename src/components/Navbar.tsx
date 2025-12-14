import { Home, MapPin, User, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

const Navbar = ({ activeSection = "home", onNavigate }: NavbarProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "events", icon: MapPin, label: "Events" },
    { id: "team", icon: User, label: "Team" },
    { id: "contact", icon: Phone, label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="bg-racing-dark rounded-full px-6 py-3 flex items-center gap-4 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate?.(item.id)}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-white text-racing-dark"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
