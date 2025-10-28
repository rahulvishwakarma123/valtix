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
  // iconImage prop add kiya
  const isPositive = changeType === "positive";
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path, { state: data });
  };

  return (
    <div className="bg-slate-800/40 backdrop-blur-lg cursor-pointer border border-slate-700/50 rounded-2xl p-6" onClick={handleNavigate}>
      <div className="flex items-center gap-4">
        {iconImage ? ( // iconImage prop hai toh image dikhao
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50">
            <img
              src={iconImage}
              alt={title}
              className="w-8 h-8 object-contain"
            />{" "}
            {/* 3D image icon */}
          </div>
        ) : (
          // nahi toh default font awesome icon dikhao
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50">
            <img src={icon} className="w-8 h-8 object-contain" alt="" />
          </div>
        )}
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="text-2xl font-bold text-white">
            <NumberFormatCommas value={value} decimalScale={isMoney ? 2 : 0} />
          </p>
        </div>
      </div>
      {change && (
        <div
          className={`mt-4 text-xs flex items-center font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          <i
            className={`fa-solid ${
              isPositive ? "fa-arrow-up" : "fa-arrow-down"
            } mr-1`}
          ></i>
          {change} in last 7 days
        </div>
      )}
    </div>
  );
};

export default StatCard;
