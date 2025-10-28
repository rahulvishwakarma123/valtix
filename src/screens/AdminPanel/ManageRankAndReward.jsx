import React, { useEffect, useState } from "react";
import {
  createRankAndReward,
  getRankAndReward,
  rankAndRewardStatus,
  updateRewardAndRank,
} from "../../api/admin.api";
import { setLoading } from "../../redux/slices/loadingSlice";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Edit3,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

const ManageRankAndReward = () => {
  const location = useLocation();
  const data = location.state;
  const [manageRankAndReward, setManageRankAndReward] = useState([]);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    investment: "",
    reward: "",
  });
  const [payload, setPayload] = useState({
    title: "",
    investment: "",
    reward: "",
    type: "Rank Reward",
  });

  const fetchManageRankAndReward = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getRankAndReward();
      setManageRankAndReward(response?.data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchManageRankAndReward();
  }, []);

  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setEditFormData({
      title: user.title || "",
      investment: user.investment || "",
      reward: user.reward || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      dispatch(setLoading(true));
      const response = await updateRewardAndRank(
        selectedUser._id,
        editFormData
      );

      if (response?.success) {
        Swal.fire({
          icon: "success",
          text: response?.message || "Rank and reward updated successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        setIsEditModalOpen(false);
        setSelectedUser(null);
        fetchManageRankAndReward();
      } else {
        Swal.fire({
          icon: "error",
          text: response?.message || "Failed to update rank and reward",
        });
      }
    } catch (err) {
      console.error("Failed to update rank and reward:", err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleStatusActiveInactive = async (id) => {
    try {
      dispatch(setLoading(true));
      const response = await rankAndRewardStatus(id);
      if (response?.success) {
        Swal.fire({
          icon: "success",
          text: response?.message || "Rank reward status changed successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        setManageRankAndReward((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, status: !user.status } : user
          )
        );
      }
    } catch (error) {
      console.error("Error changing status:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!payload.title || !payload.investment || !payload.reward) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      dispatch(setLoading(true));
      const response = await createRankAndReward(payload);

      if (response?.success) {
        Swal.fire({
          icon: "success",
          text: response?.message || "Rank created successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        setPayload({ title: "", investment: "", reward: "" });
        fetchManageRankAndReward();
      } else {
        Swal.fire({
          icon: "error",
          text: response?.message || "Failed to create rank",
        });
      }
    } catch (err) {
      console.error("Failed to create user:", err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const filteredUsers = manageRankAndReward?.filter((user) => {
    if (data === "active") {
      return user.status === true;
    } else if (data === "inactive") {
      return user.status === false;
    }
    return true;
  });

  return (
    <div className="space-y-5 mt-5">
      {/* Create Form */}
      <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg w-full">
        <h2 className="text-xl font-bold text-white mb-4">
          Create New Rank and Reward
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <span className="text-slate-400 text-sm">Title</span>
            <input
              type="text"
              name="title"
              value={payload.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
            />
          </div>
          <div className="space-y-2">
            <span className="text-slate-400 text-sm">Investment</span>
            <input
              type="text"
              name="investment"
              value={payload.investment}
              onChange={handleInputChange}
              placeholder="Investment"
              className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
            />
          </div>
          <div className="space-y-2">
            <span className="text-slate-400 text-sm">Reward</span>
            <input
              type="text"
              name="reward"
              value={payload.reward}
              onChange={handleInputChange}
              placeholder="Reward"
              className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-500 cursor-pointer"
            >
              Create
            </button>
          </div>
        </form>
      </div>

      {/* Cards List */}
      <h2 className="text-xl font-bold text-white mt-6">Rank & Reward List</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers?.map((row, index) => (
          <div
            key={row._id}
            className="group relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-800/30 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>

            {/* Header Section */}
            <div className="relative flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {row.title}
                  </h3>
                </div>
              </div>

              {/* Enhanced Status Badge */}
              <div
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                  row.status
                    ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-300 shadow-lg shadow-emerald-500/10"
                    : "bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30 text-red-300 shadow-lg shadow-red-500/10"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    row.status ? "bg-emerald-400 animate-pulse" : "bg-red-400"
                  }`}
                ></div>
                {row.status ? "Active" : "Inactive"}
              </div>
            </div>

            {/* Investment Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-blue-700/30 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-sm">Investment</span>
                </div>
                <span className="font-bold text-white text-lg">
                  ${row.investment}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 text-sm">
                    Expected Reward
                  </span>
                </div>
                <span className="font-bold text-cyan-300 text-lg">
                  {row.reward}
                </span>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 mb-6 text-slate-400">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">
                Created:{" "}
                {new Date(row?.createdAt)?.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handleOpenEditModal(row)}
                style={{
                  position: "relative",
                  zIndex: 40,
                  pointerEvents: "auto",
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group/btn"
              >
                <Edit3 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                Edit
              </button>

              <button
                onClick={() => handleStatusActiveInactive(row._id)}
                style={{
                  position: "relative",
                  zIndex: 40,
                  pointerEvents: "auto",
                }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg group/btn ${
                  row.status
                    ? "bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white hover:shadow-orange-500/25"
                    : "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white hover:shadow-emerald-500/25"
                }`}
              >
                {row.status ? (
                  <>
                    <ToggleRight className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Deactivate
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Activate
                  </>
                )}
              </button>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4">
              Edit Rank & Reward
            </h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Title</span>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditInputChange}
                  placeholder="Title"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Investment</span>
                <input
                  type="text"
                  name="investment"
                  value={editFormData.investment}
                  onChange={handleEditInputChange}
                  placeholder="Investment"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Reward</span>
                <input
                  type="text"
                  name="reward"
                  value={editFormData.reward}
                  onChange={handleEditInputChange}
                  placeholder="Reward"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setSelectedUser(null);
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRankAndReward;
