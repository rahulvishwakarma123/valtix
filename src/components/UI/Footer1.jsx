import React from "react";
import bg from "../../assets/Landing/bg.png";
import mobBg from "../../assets/Landing/mobBg.png";
import appLogo from "../../assets/appLogo.png"
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer1 = () => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      {/* Top Section */}
      <div className="z-[11] flex w-full justify-between px-4 py-[32px] h-full flex-col space-y-[48px] border-t-[1px] bg-[rgba(12,12,12,0.40)] background-blur-[75px] border-white-100 lg:min-h-[334px] lg:flex-row lg:space-y-0 lg:px-[115px] lg:py-[80px] lg:h-auto">
        {/* Logo + Tagline */}
        <div className="flex flex-col justify-start space-y-3">
          {/* SVG Logo */}
          {/* <svg
            width="194"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              clip-path="url(#a)"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#fff"
            >
              <path d="M55.076 26.287h3.132l2.474-5.328h13.294l1.317-2.848H58.87l-3.795 8.176ZM77.665 13.007H61.238l-1.315 2.834H76.35l1.316-2.834ZM170.873 26.247v.04l16.426-.04 1.315-2.834h-13.272l1.137-2.454h13.294l1.315-2.848h-16.422l-3.793 8.136ZM177.036 13.007l-1.317 2.834h16.427l1.315-2.834h-16.425ZM92.565 15.841l-3.49 7.572-10.169-.013 3.51-7.559h10.149Zm3.14 0c.614-1.325-.354-2.834-1.815-2.834H83.722a4.892 4.892 0 0 0-4.443 2.834L76.8 21.182h.01l-1.03 2.231h-.006a1.998 1.998 0 0 0 1.817 2.835h10.167a4.892 4.892 0 0 0 4.444-2.835l3.495-7.572h.008ZM151.788 13.007H141.62a4.891 4.891 0 0 0-4.443 2.834h13.285l-1.086 2.362h-13.295l-1.381 2.98-1.026 2.23-1.309 2.821-.008.014h3.133l1.315-2.835 1.097-2.362h10.162l-2.404 5.197h3.084l4.852-10.407h.009a1.997 1.997 0 0 0-1.817-2.834ZM161.196 18.111l-1.315 2.848h7.505l-.624 1.338a1.9 1.9 0 0 1-1.732 1.116l-7.922-.013a.645.645 0 0 1-.592-.919l2.566-5.538a1.91 1.91 0 0 1 1.728-1.102l12.08-.013c.597-1.325 0 0 1.329-2.821h-13.316a4.899 4.899 0 0 0-4.448 2.834l-2.474 5.341h.004l-1.03 2.231c-.614 1.326.356 2.835 1.816 2.835h10.163a4.896 4.896 0 0 0 4.447-2.835l2.444-5.302h-10.629ZM130.573 18.203h-10.695l1.097-2.362h13.29c1.338-2.834-.009 0 1.338-2.834h-13.316a4.89 4.89 0 0 0-4.447 2.834l-1.313 2.9c-.5 1.076.29 2.31 1.474 2.31h10.724l-1.092 2.362h-13.298c-.61 1.326 0 0-1.361 2.835h13.343a4.892 4.892 0 0 0 4.444-2.835s1.408-3.005 1.434-3.11a1.68 1.68 0 0 0-1.622-2.1ZM113.172 13.007h-13.34l-1.301 2.834h13.311l-1.087 2.362H97.447l-1.364 2.98-2.342 5.065h3.133l2.407-5.197h5.926l1.917 5.236h3.097l-1.878-5.236h1.435a4.325 4.325 0 0 0 3.938-2.559l1.26-2.65h.008a1.995 1.995 0 0 0-1.812-2.835ZM45.215 7.022a.578.578 0 0 1 .737.354l.517 1.497s-2.223-.709-3.381-.932l2.127-.919Zm7.265 4.002c-.005 0-.234-.157-.356-.223l-3.733-1.903c-1.158-.55-.903-.984-1.341-2.19a7.478 7.478 0 0 0-.66-1.353c-2.13-1.01-8.188-.774-8.766-5.354 0 0-2.26 1.483-2.672 4.2C11.073 2.376.002 15.55.002 15.55c4.448-1.77 9.246-2.61 14.045-2.834C4.924 19.738 2.05 30.316 2.05 30.316s7.391-7.178 18.501-11.18c-2.908 4.107-4.593 9.619-3.904 16.863 0 0 5.715-21.81 32.83-16.535 0 0 .992-2.9 3.554-5.867.162-.183.253-.459.272-.774a2.082 2.082 0 0 0-.824-1.797Z"></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h193.461v36H0z"></path>
              </clipPath>
            </defs>
          </svg> */}
          <img src={appLogo} className="md:h-28 w-1/3 lg:w-auto" alt="" />
          <span className="text-sm leading-[25px] text-white/50 font-light max-w-[250px] font-monsterrat lg:text-[15px]">
            The world’s first 100% decentralized matrix platform
          </span>
        </div>

        {/* Links + Smart Contracts */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-[81px] lg:space-y-0">
          {/* Smart Contracts */}
          <div className="flex flex-col space-y-[12px] lg:space-y-[24px]">
            <span className="text-white leading-[25.6px]">Smart Contracts</span>
            <div className="flex flex-col space-y-[12px] text-white/50">
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  eth x3 / x4
                </span>
                <span className="text-sm text-white">0x5acc...FB97</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  eth xGold
                </span>
                <span className="text-sm text-white">0x488e...b6C2</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  tron x3 / x4
                </span>
                <span className="text-sm text-white">TREbha...</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  tron xGold
                </span>
                <span className="text-sm text-white">TA6p1B...</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  busd x3 / x4
                </span>
                <span className="text-sm text-white">0x5acc...FB97</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  busd xXx
                </span>
                <span className="text-sm text-white">0x2CAa...ae52</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  busd xGold
                </span>
                <span className="text-sm text-white">0x9887...f7C5</span>
              </div>
              <div className="flex items-center space-x-[12px]">
                <span className="text-sm text-white-500 leading-[22.4px]">
                  busd xQore
                </span>
                <span className="text-sm text-white">0x1ee4...Ba78</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col space-y-[12px] lg:space-y-[24px]">
            <span className="text-white leading-[25.6px]">Products</span>
            <div className="flex flex-col space-y-[1.2rem]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 custom-transition hover:text-white"
              >
                Yumeko AI BUSD
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 custom-transition hover:text-white"
              >
                Yumeko AI ETH
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 custom-transition hover:text-white"
              >
                Yumeko AI TRX
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 custom-transition hover:text-white"
              >
                Yumeko AI TON
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="z-[1] flex w-full items-start flex-col space-y-3 p-4 h-[142px] bg-[#0C0C0C] backdrop-blur-[75px] border-t-[1px] border-[#216EFF] lg:flex-row lg:items-center lg:justify-between lg:h-[100px] lg:px-[115px] lg:space-y-0">
        <div className="flex flex-col space-y-1 font-monsterrat">
          <span className="text-sm font-light leading-[25px] text-white/50 lg:text-[15px]">
            © 2025 All Rights Reserved
          </span>
          <span className="text-sm text-white leading-[25px] lg:text-[15px]">
            Disclaimer
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-[48px]">
          {/* Telegram */}
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-transition hover:opacity-70"
          >
            {/* SVG Icon */}
            <FaTelegramPlane size={28} className="text-white" />
          </a>
          {/* Youtube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-transition hover:opacity-70"
          >
            {/* SVG Icon */}
            <FaYoutube size={28} className="text-white" />
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-transition hover:opacity-70"
          >
            {/* SVG Icon */}
            <IoLogoFacebook size={28} className="text-white" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-transition hover:opacity-70"
          >
            {/* SVG Icon */}
            <FaSquareXTwitter size={28} className="text-white" />
          </a>
        </div>
      </div>

      {/* Background Images */}
      <img
        className="absolute z-[0] bottom-0 h-[200px] left-[-10px] w-full flex lg:hidden"
        src={mobBg}
        alt="footer mobile background"
      />
      <img
        className="absolute w-full z-[0] hidden lg:flex"
        src={bg}
        alt="footer background"
      />
    </div>
  );
};

export default Footer1;
