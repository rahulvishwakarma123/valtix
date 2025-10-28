import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getWalletAddress } from "../../utils/additionalFunc";
import {
  emailValidator,
  nameValidator,
  phoneValidator,
  validateWalletAddress,
} from "../../utils/inputValidator";
import WalletOptionModal from "../../components/Screen/Landing/WalletOptionModal";
import { createUserApi } from "../../api/auth.api";
import { loginUser } from "../../redux/slices/authSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import {
  AuthenticatedUserRouters,
  LandingRouters,
} from "../../constants/routes";
import { MainContent } from "../../constants/mainContent";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const [showWalletModal, setShowWalletModal] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    referral: "",
    walletAddress: "",
    countryCode: "",
    country: ""
  });
  useEffect(() => {
    if (search) {
      setFormData({
        ...formData,
        referral: search?.split("=")[1] || "",
      });
    }
  }, [search]);

  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleNavigate = () => {
    navigate(AuthenticatedUserRouters.DASHBOARD);
  };

  const validate = () => {
    const validationErrors = {};
    let isValid = true;

    const nameError = nameValidator(formData.username);
    const emailError = emailValidator(formData.email);
    const mobileError = phoneValidator(formData.mobile, false);
    const walletAddressError =
      validateWalletAddress(formData.walletAddress) || "";
    if (nameError) {
      validationErrors.username = nameError;
      isValid = false;
    }
    if (emailError) {
      validationErrors.email = emailError;
      isValid = false;
    }
    if (mobileError) {
      validationErrors.mobile = mobileError;
      isValid = false;
    }
    if (walletAddressError) {
      validationErrors.walletAddress = walletAddressError;
      isValid = false;
    }
    setErrors(validationErrors);

    return isValid;
  };

  const handleRegisterClick = async (walletAddress) => {
    try {
      dispatch(setLoading(true));
      const response = await createUserApi({
        ...formData,
        walletAddress: walletAddress || formData.walletAddress,
      });

      console.log(response, "asdfghjk")

      if (response?.success) {
        await dispatch(
          loginUser({
            token: response?.token,
            userId: response?.data?._id,
            role: response?.data?.role,
            data: response?.data, // Save other details if required
          })
        );
        Swal.fire({
          icon: "success",
          title: "Registration Success",
          text: "You have registered successfully",
          timer: 3000,
        }).then(() => {
          handleNavigate();
        });
      } else {
        toast.error(response?.response?.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error?.response?.data?.message ||
          error.message ||
          "Something went wrong",
        timer: 3000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleSubmit = () => {
    if (validate()) {
      handleRegisterClick();
    } else {
      toast.error("Please fill the required fields.");
    }
  };
  const getWalletAddressConnect = async (type) => {
    try {
      dispatch(setLoading(true));
      const response = await getWalletAddress(type);
      setFormData({ ...formData, walletAddress: response });
      sessionStorage.setItem("walletType", response);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Wallet Connect Failed",
        text:
          error?.response?.data?.message ||
          error.message ||
          "Something went wrong",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <WalletOptionModal
        hide={() => setShowWalletModal(false)}
        connectWallet={(wallet) => getWalletAddressConnect(wallet)}
        show={showWalletModal}
      />
      <div
        className="bg-slate-900 rounded-md text-white pt-24 min-h-screen flex items-center justify-center p-4 main-bg-image"
        style={{ "--bg-image-url": `url(/bg.webp)` }}
      >
        <div className="w-full max-w-lg bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <img src={MainContent.appLogo} alt="app Logo" className="h-12" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Create Your Account
          </h1>
          <p className="text-slate-400 mb-8 text-center">
            Join the community and start earning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={(e) => handleChange(e, "username")}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Country Code
              </label>
              <input
                type="text"
                placeholder="Enter your country code"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.countryCode}
                onChange={(e) => handleChange(e, "countryCode")}
              />
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.mobile}
                onChange={(e) => handleChange(e, "mobile")}
                maxLength={10}
                pattern="[0-9]{10}"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Referral Code (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter referral code"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.referral}
                onChange={(e) => handleChange(e, "referral")}
              />
              {errors.referral && (
                <p className="text-red-500 text-xs mt-1">{errors.referral}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Country
              </label>
              <input
                type="text"
                placeholder="Enter country name"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.country}
                onChange={(e) => handleChange(e, "country")}
              />
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={(e) => handleChange(e, "password")}
              />
            </div>

            {/* Wallet Address (Full Width) */}
            <div className="md:col-span-2">
              <label className="text-sm text-slate-400 mb-2 block">
                Your Wallet Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Connect your wallet to fill this"
                  readOnly
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg py-3 px-4 text-slate-400 cursor-not-allowed"
                  value={formData.walletAddress}
                  onChange={(e) => handleChange(e, "walletAddress")}
                />
                <button
                  type="button"
                  onClick={() => setShowWalletModal(true)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-700 text-white px-3 py-1 text-xs rounded-md hover:bg-slate-600"
                >
                  Connect
                </button>
              </div>
              {errors.walletAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.walletAddress}
                </p>
              )}
            </div>

            <button
              className="w-full bg-blue-600 cursor-pointer text-white p-4 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 md:col-span-2 mt-2"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>

          <div className="mt-6 text-sm text-center">
            <p className="text-slate-400">
              Already have an account?{" "}
              <Link
                to={LandingRouters.USER_LOGIN}
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
