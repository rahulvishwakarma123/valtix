import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LandingRouters } from "../../../constants/routes";

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        participants: prev.participants + Math.floor(Math.random() * 3),
        joined: prev.joined + (Math.random() > 0.7 ? 1 : 0),
        profit: prev.profit + Math.floor(Math.random() * 10000),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  return (
    <div className="relative flex items-center overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 238, 45, 0.3), 0 0 40px rgba(255, 238, 45, 0.1); }
            50% { box-shadow: 0 0 40px rgba(255, 238, 45, 0.5), 0 0 80px rgba(255, 238, 45, 0.2); }
          }
          
          @keyframes grid-flow {
            0% { transform: translateY(0); }
            100% { transform: translateY(64px); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          @keyframes particle-float {
            0% { transform: translate(0, 0) scale(1); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
          }
          
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
          .animate-grid { animation: grid-flow 20s linear infinite; }
          .animate-rotate-slow { animation: rotate 20s linear infinite; }
          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }
          
          .glass-morphism {
            background: rgba(11, 11, 11, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .text-gradient {
            background: linear-gradient(135deg, #FFEE2D 0%, #FFD700 50%, #FFA500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glow-text {
            text-shadow: 0 0 30px rgba(255, 238, 45, 0.5),
                         0 0 60px rgba(255, 238, 45, 0.3),
                         0 0 90px rgba(255, 238, 45, 0.1);
          }

          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 238, 45, 0.6);
            border-radius: 50%;
            animation: particle-float 4s ease-out infinite;
          }
        `}
      </style>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 238, 45, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 238, 45, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            "--tx": `${(Math.random() - 0.5) * 200}px`,
            "--ty": `${-Math.random() * 300}px`,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="max-w-7xl container relative z-20 mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center space-y-12 w-full">
          {/* Floating Stats - Top */}
          <div className="rounded-full px-8 py-3 animate-pulse-glow">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">Participants</span>
                <span className="text-sm font-bold text-white">
                  {count.participants.toLocaleString()}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">24h Joined</span>
                <span className="text-sm font-bold text-gradient">
                  +{count.joined}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">Total Profit</span>
                <span className="text-sm font-bold text-white">
                  ${(count.profit / 1000000).toFixed(1)}M
                </span>
              </div>
            </div>
          </div>

          {/* Main Title with Enhanced Effects */}
          <div className="relative">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight">
              <span className="block text-gradient glow-text animate-float">
                Take Full Control
              </span>
              <span className="block text-white mt-4">
                of Your Wealth with{" "}
                <span className="relative inline-block">
                  <span className="text-gradient glow-text">Yumeko AI</span>
                  <span className="absolute -inset-2 bg-yellow-500/20 blur-xl rounded-full -z-10" />
                </span>
              </span>
            </h1>

            {/* Shimmer Effect Overlay */}
            {/* <div className="absolute inset-0 animate-shimmer pointer-events-none" /> */}
          </div>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-300 text-center max-w-2xl leading-relaxed">
            Experience the next generation of decentralized investment.
            <span className="text-yellow-400 font-semibold">
              {" "}
              Join millions
            </span>{" "}
            earning passive income daily.
          </p>

          {/* Center Graphic - Enhanced X2 Label */}
          <div
            className="relative w-full max-w-4xl my-12 animate-float"
            style={{
              transform: `perspective(1000px) rotateX(${
                parallaxY * 0.5
              }deg) rotateY(${parallaxX * 0.5}deg)`,
            }}
          >
            <div className="relative aspect-video glass-morphism rounded-3xl p-12 overflow-hidden group">
              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-slow"
                style={{
                  padding: "2px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                }}
              />

              {/* X2 Display */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-9xl font-black text-gradient glow-text mb-4">
                  X3
                </div>
                <div className="text-2xl text-white font-semibold tracking-wider">
                  MULTIPLIER PROTOCOL
                </div>
                <div className="mt-6 flex gap-4">
                  <div className="glass-morphism px-6 py-3 rounded-full">
                    <span className="text-yellow-400 font-bold">
                      Smart Contract
                    </span>
                  </div>
                  <div className="glass-morphism px-6 py-3 rounded-full">
                    <span className="text-yellow-400 font-bold">
                      Verified ✓
                    </span>
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-yellow-400 rounded-full"
                    style={{
                      width: `${(i + 1) * 100}px`,
                      height: `${(i + 1) * 100}px`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      animation: `rotate ${20 + i * 5}s linear infinite ${
                        i % 2 === 0 ? "reverse" : ""
                      }`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full font-bold text-black text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50" onClick={() => navigate(LandingRouters.USER_REGISTER)}>
              <span className="relative z-10">Start Earning Now</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>

            <button className="px-10 py-5 glass-morphism rounded-full font-bold text-white text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 border-2 border-yellow-400/30 hover:border-yellow-400" onClick={() => navigate(LandingRouters.USER_LOGIN)}>
              View Platform Stats
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>3.4M+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Instant Transactions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Logo Circle - Top Right */}
      <div
        className="absolute top-10 right-10 w-32 h-32 lg:w-40 lg:h-40"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        }}
      >
        <div className="relative w-full h-full animate-float">
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 glass-morphism rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-2xl lg:text-3xl font-black text-gradient">
                Y
              </span>
            </div>
          </div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-rotate-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,238,45,0.3)"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="rgba(255,238,45,0.5)"
                strokeWidth="0.5"
              />
              <text fontSize="6" fill="#FFEE2D" opacity="0.8">
                <textPath href="#circlePath" startOffset="0%">
                  YUMEKO AI • DECENTRALIZED • YUMEKO AI • DECENTRALIZED •
                </textPath>
              </text>
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
