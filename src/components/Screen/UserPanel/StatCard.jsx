/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { NumberFormatCommas } from "../../../utils/FormatText";

const StatCard = ({
  title,
  value,
  icon,
  iconImage,
  change,
  changeType,
  isMoney,
  path,
  data
}) => {
  const isPositive = changeType === "positive";
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path, { state: data });
  };

  return (
    <div 
      className="relative cursor-pointer rounded-3xl p-7 overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      onClick={handleNavigate}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
        // backdropFilter: 'blur(0px)',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: `
          0 15px 50px 0 rgba(0, 0, 0, 0.4),
          inset 0 1px 0 rgba(255,255,255,0.4),
          inset 0 -1px 0 rgba(255,255,255,0.2)
        `
      }}
    >
      {/* Main Water Drop Highlight */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-30 rounded-t-3xl"></div>
      
      {/* Crystal Clear Water Droplets */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-1 group-hover:opacity-40 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          filter: 'blur(0px)'
        }}
      ></div>
      
      <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-20 group-hover:opacity-35 transition-all duration-900"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 60%)',
          filter: 'blur(8px)'
        }}
      ></div>
      
      <div className="absolute top-12 -left-4 w-16 h-16 rounded-full opacity-5 group-hover:opacity-30 transition-all duration-1100"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 70%)',
          filter: 'blur(2px)'
        }}
      ></div>

      {/* Water Surface Reflection */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent opacity-10 rounded-t-3xl"></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite'
        }}
      ></div>

      <div className="flex items-center gap-6 relative z-10">
        {iconImage ? (
          <div 
            className="relative w-18 h-18 flex items-center justify-center rounded-2xl transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
              border: '1.5px solid rgba(255,255,255,0.4)',
              boxShadow: `
                0 8px 25px 0 rgba(255,255,255,0.2),
                inset 0 2px 4px rgba(255,255,255,0.3),
                inset 0 -2px 4px rgba(255,255,255,0.1)
              `
            }}
          >
            {/* Icon Highlight */}
            <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white/40 blur-sm"></div>
            
            <img
              src={iconImage}
              alt={title}
              className="w-9 h-9 object-contain relative z-10 transition-all duration-400 group-hover:scale-110"
              // style={{
              //   filter: 'brightness(0) invert(1) drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              // }}
            />
          </div>
        ) : (
          <div 
            className="relative w-18 h-18 flex items-center justify-center rounded-2xl transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)',
              border: '1.5px solid rgba(255,255,255,0.4)',
              boxShadow: `
                0 8px 25px 0 rgba(255,255,255,0.2),
                inset 0 2px 4px rgba(255,255,255,0.3),
                inset 0 -2px 4px rgba(255,255,255,0.1)
              `
            }}
          >
            {/* Icon Highlight */}
            <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white/40 blur-sm"></div>
            
            <img 
              src={icon} 
              className="w-9 h-9 object-contain relative z-10 transition-all duration-400 group-hover:scale-110" 
              alt=""
              // style={{
              //   filter: 'brightness(0) invert(1) drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              // }}
            />
          </div>
        )}
        
        <div className="flex-1">
          <p className="text-sm text-white/90 mb-3 font-semibold tracking-wide drop-shadow-md">{title}</p>
          <p className="text-3xl font-bold text-white tracking-tight drop-shadow-lg">
            <NumberFormatCommas value={value} decimalScale={isMoney ? 2 : 0} />
          </p>
        </div>
      </div>
      
      {change && (
        <div
          className={`mt-6 text-sm flex items-center font-semibold relative z-10 ${
            isPositive ? "text-green-200" : "text-red-200"
          }`}
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          <div 
            className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110 ${
              isPositive 
                ? 'bg-green-500/30 border border-green-300/40 shadow-lg shadow-green-500/20' 
                : 'bg-red-500/30 border border-red-300/40 shadow-lg shadow-red-500/20'
            }`}
          >
            <i
              className={`fa-solid text-sm ${
                isPositive ? "fa-arrow-up text-green-200" : "fa-arrow-down text-red-200"
              }`}
              style={{
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))'
              }}
            ></i>
          </div>
          <span className="drop-shadow-md">{change} in last 7 days</span>
        </div>
      )}
      
      {/* Bottom Water Reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 70%, transparent 100%)'
        }}
      ></div>
    </div>
  );
};

export default StatCard;

// Add this CSS to your global styles for the shimmer animation


// Don't forget to inject the styles in your main component