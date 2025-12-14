import { Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const SocialBar = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="bg-secondary/95 backdrop-blur-sm rounded-full py-6 px-3 flex flex-col items-center gap-5 shadow-lg">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="text-foreground/60 hover:text-foreground transition-colors duration-300"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialBar;
