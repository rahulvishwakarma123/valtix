import React from 'react';
import { TrendingUp, Star, Crown, Award, Target, DollarSign, ArrowUp, Zap } from 'lucide-react';

// Investment levels configuration with dummy data
const investmentLevels = [
  { id: 1, name: "Bronze Investor", minInvestment: 0, maxInvestment: 9999, color: "amber", icon: Star, benefits: ["Basic portfolio tracking", "Monthly reports"] },
  { id: 2, name: "Silver Investor", minInvestment: 10000, maxInvestment: 49999, color: "slate", icon: Award, benefits: ["Priority support", "Advanced analytics", "Quarterly reviews"] },
  { id: 3, name: "Gold Investor", minInvestment: 50000, maxInvestment: 149999, color: "yellow", icon: Crown, benefits: ["Personal advisor", "Premium strategies", "Weekly insights"] },
  { id: 4, name: "Platinum Investor", minInvestment: 150000, maxInvestment: 499999, color: "purple", icon: Zap, benefits: ["VIP treatment", "Exclusive opportunities", "Daily market updates"] },
  { id: 5, name: "Diamond Investor", minInvestment: 500000, maxInvestment: Infinity, color: "cyan", icon: Crown, benefits: ["Elite status", "Private banking", "Custom investment solutions"] }
];

// Dummy user data
const userData = {
  totalInvestment: 87500,
  currentLevel: "Gold Investor",
  nextLevel: "Platinum Investor",
  progressPercentage: 58.33, // (87500 - 50000) / (150000 - 50000) * 100
  amountToNextLevel: 62500,
  memberSince: "2023-03-15",
  totalReturns: 12750,
  activeInvestments: 8
};

const UserActivityProgress = () => {
  const currentLevelData = investmentLevels.find(level => level.name === userData.currentLevel);
  const nextLevelData = investmentLevels.find(level => level.name === userData.nextLevel);
  const CurrentLevelIcon = currentLevelData?.icon || Star;
  const NextLevelIcon = nextLevelData?.icon || Crown;

  const getColorClasses = (color) => {
    const colors = {
      amber: { bg: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30", text: "text-amber-300", glow: "shadow-amber-500/20" },
      slate: { bg: "from-slate-500/20 to-gray-500/20", border: "border-slate-500/30", text: "text-slate-300", glow: "shadow-slate-500/20" },
      yellow: { bg: "from-yellow-500/20 to-amber-500/20", border: "border-yellow-500/30", text: "text-yellow-300", glow: "shadow-yellow-500/20" },
      purple: { bg: "from-purple-500/20 to-indigo-500/20", border: "border-purple-500/30", text: "text-purple-300", glow: "shadow-purple-500/20" },
      cyan: { bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30", text: "text-cyan-300", glow: "shadow-cyan-500/20" }
    };
    return colors[color] || colors.amber;
  };

  const currentColors = getColorClasses(currentLevelData?.color);
  const nextColors = getColorClasses(nextLevelData?.color);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-800/30 p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={`p-3 bg-gradient-to-br ${currentColors.bg} rounded-2xl border ${currentColors.border} shadow-lg ${currentColors.glow}`}>
            <CurrentLevelIcon className={`w-8 h-8 ${currentColors.text}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Investment Progress</h2>
            <p className="text-slate-400">Track your journey to the next level</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">${userData.totalInvestment.toLocaleString()}</div>
          <div className="text-sm text-slate-400">Total Investment</div>
        </div>
      </div>

      {/* Current Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-xl hover:border-blue-600/30 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            <span className="text-slate-300 text-sm">Total Returns</span>
          </div>
          <div className="text-2xl font-bold text-green-400">${userData.totalReturns.toLocaleString()}</div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-xl hover:border-blue-600/30 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 text-sm">Active Investments</span>
          </div>
          <div className="text-2xl font-bold text-blue-400">{userData.activeInvestments}</div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-xl hover:border-blue-600/30 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-300 text-sm">Member Since</span>
          </div>
          <div className="text-lg font-bold text-cyan-400">
            {new Date(userData.memberSince).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
          </div>
        </div>
      </div>

      {/* Level Progress Section */}
      <div className="bg-gradient-to-r from-slate-800/30 to-blue-900/20 border border-blue-800/40 p-6 rounded-2xl mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 bg-gradient-to-br ${currentColors.bg} rounded-lg border ${currentColors.border}`}>
              <CurrentLevelIcon className={`w-5 h-5 ${currentColors.text}`} />
            </div>
            <div>
              <div className="text-lg font-bold text-white">{userData.currentLevel}</div>
              <div className="text-sm text-slate-400">Current Level</div>
            </div>
          </div>
          
          <ArrowUp className="w-6 h-6 text-slate-500 animate-bounce" />
          
          <div className="flex items-center gap-3">
            <div>
              <div className="text-lg font-bold text-white text-right">{userData.nextLevel}</div>
              <div className="text-sm text-slate-400 text-right">Next Level</div>
            </div>
            <div className={`p-2 bg-gradient-to-br ${nextColors.bg} rounded-lg border ${nextColors.border}`}>
              <NextLevelIcon className={`w-5 h-5 ${nextColors.text}`} />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              style={{ width: `${userData.progressPercentage}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="absolute -top-5 left-0 right-0 flex justify-between text-xs text-slate-400">
            <span>${currentLevelData?.minInvestment.toLocaleString()}</span>
            <span>{userData.progressPercentage.toFixed(1)}% Complete</span>
            <span>${nextLevelData?.minInvestment.toLocaleString()}</span>
          </div>
        </div>

        {/* Investment Needed */}
        <div className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30">
          <Target className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-semibold">
            Invest <span className="text-cyan-400 font-bold">${userData.amountToNextLevel.toLocaleString()}</span> more to reach {userData.nextLevel}
          </span>
        </div>
      </div>

      {/* Level Benefits Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-5 bg-gradient-to-br ${currentColors.bg} border ${currentColors.border} rounded-xl`}>
          <h4 className={`font-bold ${currentColors.text} mb-3 flex items-center gap-2`}>
            <CurrentLevelIcon className="w-5 h-5" />
            Current Benefits
          </h4>
          <ul className="space-y-2">
            {currentLevelData?.benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-slate-300 flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentColors.bg.replace('/20', '/60')}`}></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-5 bg-gradient-to-br ${nextColors.bg} border ${nextColors.border} rounded-xl opacity-75 hover:opacity-100 transition-opacity duration-300`}>
          <h4 className={`font-bold ${nextColors.text} mb-3 flex items-center gap-2`}>
            <NextLevelIcon className="w-5 h-5" />
            Next Level Benefits
          </h4>
          <ul className="space-y-2">
            {nextLevelData?.benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-slate-300 flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${nextColors.bg.replace('/20', '/60')}`}></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserActivityProgress;