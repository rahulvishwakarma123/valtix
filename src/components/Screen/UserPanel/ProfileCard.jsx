import { useState } from "react";
import { useSelector } from "react-redux";
import {
  maskEmailAddress,
  maskWalletAddress,
  shareReferralCode,
} from "../../../utils/additionalFunc";
import { toast } from "react-toastify";
import { MdOutlineShare } from "react-icons/md";
import { TbCopyCheck, TbCopy } from "react-icons/tb";

const ProfileCard = () => {
  const user = useSelector((state) => state?.isLoggedUser?.data);
  console.log(user)
  const [copiedText1, setCopiedText1] = useState(false);
  const location = window.location.origin;
  const referCode = `${location}/register?referral=${user?.referralLink}`;
  const handleCopy = (text, setCopiedState) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedState(true);
        toast.success("Referral link copied!");
        setTimeout(() => setCopiedState(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-slate-800/40 mt-10 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center h-full">
      <img
        src={
          user?.picture || "https://api.dicebear.com/8.x/lorelei/svg?seed=Lanre"
        }
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-4 border-blue-500/50 -mt-16 shadow-lg"
      />
      <h3 className="text-xl font-bold text-white mt-4">{user?.id || "N/A"}</h3>
      <h3 className="text-xl font-bold text-white mb-2 capitalize">
        {user?.username || "N/A"}
      </h3>
      <p className="text-sm text-slate-400">Your Personal Profile</p>

      <hr className="w-full border-slate-700 my-4" />

      <div className="w-full space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Sponsored By:</span>
          <span className="font-semibold text-white capitalize">
            {user?.sponsor?.id || "N/A"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Email:</span>
          <span className="font-semibold text-white">
            {maskEmailAddress(user?.email) || "N/A"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Mobile:</span>
          <span className="font-semibold text-white">
            {maskWalletAddress(user?.mobile) || "N/A"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Wallet Address:</span>
          <span className="font-semibold text-white">
            {maskWalletAddress(user?.account) || "N/A"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Joined:</span>
          <span className="font-semibold text-white">
            {new Date(user?.createdAt)?.toLocaleDateString() || "N/A"}
          </span>
        </div>
      </div>

      <hr className="w-full border-slate-700 my-4" />

      <p className="text-xs text-slate-400 mb-2 text-center">
        Your Referral Link:
      </p>
      <div className="relative w-full flex gap-2">
        <input
          type="text"
          readOnly
          value={referCode || "N/A"}
          disabled
          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2 px-3 text-slate-300 text-xs pointer-events-none"
        />
        <div className="flex gap-2">
          <button
            onClick={() => handleCopy(referCode, setCopiedText1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 
                   hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200 
                   border border-slate-700`}
          >
            {copiedText1 ? <TbCopyCheck /> : <TbCopy />}
          </button>
          <button
            onClick={() => shareReferralCode(referCode)}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 
                   hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200 
                   border border-slate-700`}
          >
            <MdOutlineShare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
