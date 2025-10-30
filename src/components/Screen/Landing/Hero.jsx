import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LandingRouters } from "../../../constants/routes";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const [count, setCount] = useState({
    participants: 3476318,
    joined: 217,
    profit: 1317726919,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        participants: prev.participants + Math.floor(Math.random() * 8 + 2),
        joined: prev.joined + (Math.random() > 0.5 ? 1 : 0),
        profit: prev.profit + Math.floor(Math.random() * 50000 + 10000),
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Mouse follower element position
  const mouseX = mousePosition.x - 20;
  const mouseY = mousePosition.y - 20;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Custom cursor styles */}
      <style>
        {`
          .mouse-follower {
            width: 40px;
            height: 40px;
            border: 2px solid #3b82f6;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: all 0.1s ease;
          }
          
          .mouse-follower.hovering {
            transform: scale(1.5);
            background: rgba(59, 130, 246, 0.2);
            border-color: #60a5fa;
          }
          
          .mouse-dot {
            width: 6px;
            height: 6px;
            background: #3b82f6;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
          }
        `}
      </style>

      {/* Custom Cursor */}
      
      <div 
        className="mouse-dot"
        style={{
          left: `${mousePosition.x - 3}px`,
          top: `${mousePosition.y - 3}px`,
        }}
      />

      {/* Hero Section - Blue & Black Theme */}
      <div 
        className="relative max-sm:py-5 min-h-screen bg-gradient-to-br from-black via-blue-900/30 to-black overflow-hidden"
        onMouseEnter={() => setIsHovering(false)}
      >
        
        {/* Animated Blue Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating Blue Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-blue-400"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-1 h-full bg-cyan-400"
            animate={{ y: [-100, 100] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 h-screen flex items-center justify-center">
          <motion.div 
            className="text-center space-y-8 max-w-6xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Cyber Badge - Blue Theme */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 border border-blue-500/50 rounded-full bg-black/50 backdrop-blur-sm"
              variants={itemVariants}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div 
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-cyan-400 font-mono text-sm tracking-wider">
                ACTIVE TRADING: 24/7
              </span>
            </motion.div>

            {/* Main Title - Blue Gradient */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-none">
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  VALTIX
                </motion.span>
                <motion.span 
                  className="block text-white text-4xl lg:text-6xl mt-4 tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  AI WEALTH PROTOCOL
                </motion.span>
              </h1>

              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-blue-300">Quantum-powered AI</span> that transforms your capital into 
                <span className="text-cyan-300"> exponential growth</span>. Join the financial revolution.
              </motion.p>
            </motion.div>

            {/* Animated Stats - Blue Theme */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto max-sm:grid-cols-1"
              variants={containerVariants}
            >
              {[
                { value: count.participants, label: 'ELITE TRADERS', color: 'text-blue-300' },
                { value: `+${count.joined}`, label: 'ACTIVE TODAY', color: 'text-cyan-300' },
                { value: `$${(count.profit / 1000000).toFixed(1)}M`, label: 'GENERATED', color: 'text-sky-300' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center max-sm:flex max-sm:flex-col"
                  variants={itemVariants}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2 font-mono`}>
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Blue Theme */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => navigate(LandingRouters.USER_REGISTER)}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold text-white text-lg uppercase tracking-widest overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  INITIATE PROTOCOL
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>

              <motion.button 
                onClick={() => navigate(LandingRouters.USER_LOGIN)}
                className="px-12 py-6 border-2 border-blue-500/50 rounded-lg font-bold text-blue-300 text-lg uppercase tracking-widest backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgb(59, 130, 246)",
                  color: "rgb(147, 197, 253)"
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                ACCESS TERMINAL
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </>
  );
};

export default Hero;