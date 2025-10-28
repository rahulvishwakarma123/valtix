import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useState } from "react";
import { MainContent } from "../../constants/mainContent";
import {
  AuthenticatedUserRouters,
  LandingRouters,
} from "../../constants/routes";
import { loginUser } from "../../redux/slices/authSlice";
import { getWalletAddress } from "../../utils/additionalFunc";
import { setLoading } from "../../redux/slices/loadingSlice";
import { loginUserApi } from "../../api/auth.api";
import WalletOptionModal from "../../components/Screen/Landing/WalletOptionModal";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showWalletModal, setShowWalletModal] = useState(false);
  const initialData = {
    email: "",
    password: "",
  };
  const [payload, setPayload] = useState(initialData);

  const getWalletAddressConnect = async (type) => {
    try {
      dispatch(setLoading(true));
      const response = await getWalletAddress(type);
      handleLogin(response);
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
      dispatch(setLoading(false));
    }
  };
  const handleLogin = async (walletAddress) => {
    try {
      dispatch(setLoading(true));
      const response = await loginUserApi({ walletAddress });
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
          title: "Login Success",
          text: "You have logged in successfully",
          timer: 3000,
        }).then(() => {
          navigate(AuthenticatedUserRouters.DASHBOARD);
        });
      } else {
        toast.error(response?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
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

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    try {
      const response = await loginUserApi(payload);
      console.log(response, "response");
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
          title: "Login Success",
          text: "You have logged in successfully",
          timer: 3000,
        }).then(() => {
          navigate(AuthenticatedUserRouters.DASHBOARD);
        });
      } else {
        toast.error(response?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
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

  const handleChange = (e, field) => {
    const { value } = e.target;
    setPayload({
      ...payload,
      [field]: value,
    });
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
        <div className="w-full max-w-md bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl text-center space-y-5">
          <div className="flex justify-center mb-6">
            <img src={MainContent.appLogo} alt="App Logo" className="h-12" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <div className="space-y-5">
            <div>
              <label className="text-sm text-start text-slate-400 mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={payload.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>
            <div>
              <label className=" text-start text-sm text-slate-400 mb-2 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={payload.password}
                onChange={(e) => handleChange(e, "password")}
              />
            </div>
            <button
              className="w-full cursor-pointer
               bg-blue-600 text-white p-4 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 md:col-span-2 mt-2"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="space-y-5">
            <p className="text-slate-400">OR</p>
            <p className="text-slate-400">
              Connect your wallet to access your dashboard.
            </p>

            <button
              onClick={() => setShowWalletModal(true)}
              className="w-full cursor-pointer
               bg-blue-600 text-white p-4 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-wallet"></i>
              Connect Wallet
            </button>
          </div>

          <div className="text-sm">
            <p className="text-slate-400">
              New to the platform?{" "}
              <Link
                to={LandingRouters.USER_REGISTER}
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
