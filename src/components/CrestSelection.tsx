import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

import crest1 from "@/assets/CONVERGE.png";
import crest2 from "@/assets/CONVERGE (2).png";
import crest3 from "@/assets/CONVERGE (3).png";
import crest4 from "@/assets/CONVERGE (6).png";

const crests = [crest1, crest2, crest3, crest4];

const CrestSelection = ({ onSelected }: { onSelected: (src: string) => void }) => {
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("crest-bg-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x9f7aea, roughness: 0.4, metalness: 0.6 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffc107, 1.2);
    light.position.set(5, 5, 5);
    scene.add(light);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.004;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const handleSelect = (src: string) => {
    localStorage.setItem("converge_crest", src);
    onSelected(src);
    navigate("/", { replace: true });
  };

  return (
    <AnimatePresence>
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-gradient-to-br from-black via-black/70 to-primary/20"
        >
          <canvas id="crest-bg-canvas" className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl md:text-4xl font-extrabold text-foreground mb-8"
            >
              CHOOSE YOUR CREST
            </motion.h2>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-10 max-w-5xl"
            >
              {crests.map((src, i) => (
                <motion.button
                  key={src}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelect(src)}
                  className="group rounded-3xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-md border border-white/10"
                >
                  <div
                    className="relative w-full h-80 will-change-transform"
                    onMouseMove={(e) => {
                      const card = e.currentTarget as HTMLDivElement;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateY = ((x - centerX) / centerX) * 8;
                      const rotateX = -((y - centerY) / centerY) * 8;
                      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget as HTMLDivElement;
                      card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
                    }}
                  >
                    <motion.img
                      src={src}
                      alt={`Crest ${i + 1}`}
                      className="w-full h-full object-cover rounded-3xl"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 right-3 text-xs text-white/90">Click to select</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CrestSelection;
