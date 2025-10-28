import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Transactions from "./Transactions";
import StatCard from "../../components/Screen/UserPanel/StatCard";
import EarningsChart from "../../components/Screen/UserPanel/EarningsChart";
import ProfileCard from "../../components/Screen/UserPanel/ProfileCard";
import { getIncomeTotal, getTransactionHistory } from "../../api/auth.api";
import { setLoading } from "../../redux/slices/loadingSlice";
import { toast } from "react-toastify";
import {
  getIncomeTotalForAdmin,
  getIncomeTotalForAdminIncome,
  getTransactionHistoryForAdmin,
} from "../../api/admin.api";
import {
  AuthenticatedAdminRouters,
  AuthenticatedUserRouters,
} from "../../constants/routes";
import aiTradeBg from "../../assets/Landing/ai-trade.jpg";
import UserActivityProgress from "../../components/Screen/UserPanel/UserActivityProgress";

const Dashboard1 = () => {
  const [transactionHistory, setTransactionHistory] = useState(null);
  const role = useSelector((state) => state?.isLoggedUser?.role);
  const access = localStorage.getItem("access");
  console.log(access, "access");
  // const role = "admin";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchTransactionHistory = async () => {
    try {
      dispatch(setLoading(true));
      if (role === "USER") {
        const response = await getTransactionHistory();
        setTransactionHistory(response?.data);
      } else if (role === "ADMIN") {
        const response = await getTransactionHistoryForAdmin();
        setTransactionHistory(response?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchTransactionHistory();
  }, [role]);

  const [totalIncome, setTotalIncome] = useState(null);

  useEffect(() => {
    const fetchIncomeTotal = async () => {
      try {
        dispatch(setLoading(true));
        if (role === "USER" ) {
          const userResponse = await getIncomeTotal();
          setTotalIncome(userResponse?.data);
        } else {
          const userResponse = await getIncomeTotalForAdminIncome();
          setTotalIncome(userResponse?.data);
          const response = await getIncomeTotalForAdmin();
          setTotalIncome(response);
        }
      } catch (err) {
        console.log("err", err);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchIncomeTotal();
  }, [dispatch, access, role]);

  const revenueOverview = [
    {
      title: "Total Partners",
      value: `${Number(totalIncome?.partners ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/conference-call.png",
      path: AuthenticatedUserRouters.MY_REFERRALS,
    },
    {
      title: "Active Partners",
      value: `${Number(totalIncome?.partnerActive ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/ok.png",
      path: AuthenticatedUserRouters.MY_REFERRALS,
      data: "active",
    },
    {
      title: "Inactive Partners",
      value: `${Number(totalIncome?.partnerInactive ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/group--v3.png",
      path: AuthenticatedUserRouters.MY_REFERRALS,
      data: "inactive",
    },
    {
      title: "Total Downline Users",
      value: `${Number(totalIncome?.totalDownlineUsers ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/user-group-woman-woman--v3.png",
      path: AuthenticatedUserRouters.MY_TEAM,
    },
    {
      title: "Total Trading Income",
      value: `$ ${Number(totalIncome?.totalTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/receive-cash.png",
      path: AuthenticatedUserRouters.TRADING_INCOME_HISTORY,
    },
    {
      title: "Today Trading Income",
      value: `$ ${Number(totalIncome?.todayTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/money.png",
      path: AuthenticatedUserRouters.TRADING_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Level Income",
      value: `$ ${Number(totalIncome?.totalLevel ?? 0).toFixed(2)}`,
      icon: "https://cdn-icons-png.flaticon.com/512/10102/10102408.png",
      path: AuthenticatedUserRouters.LEVEL_INCOME_HISTORY,
    },
    {
      title: "Today Level Income",
      value: `$ ${Number(totalIncome?.todayLevel ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/isometric/50/economic-improvement--v1.png",
      path: AuthenticatedUserRouters.LEVEL_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Global Achievers",
      value: `${Number(totalIncome?.totalGlobalAchiever ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/medal.png",
      path: AuthenticatedUserRouters.GLOBAL_ACHIEVERS,
    },
    {
      title: "Today Global Achievers",
      value: `${Number(totalIncome?.todayGlobalAchiever ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/prize.png",
      path: AuthenticatedUserRouters.GLOBAL_ACHIEVERS,
      data: "today",
    },
    {
      title: "Total Matching Income",
      value: `$ ${Number(totalIncome?.totalMatching ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/combo-chart.png",
      path: AuthenticatedUserRouters.MATCHING_INCOME_HISTORY,
    },
    {
      title: "Today Matching Income",
      value: `$ ${Number(totalIncome?.todayMatching ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/increase.png",
      path: AuthenticatedUserRouters.MATCHING_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Referrals Income",
      value: `$ ${Number(totalIncome?.totalReferral ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/group.png",
      path: AuthenticatedUserRouters.REFERRAL_INCOME_HISTORY,
    },
    {
      title: "Today Referrals Income",
      value: `$ ${Number(totalIncome?.todayReferral ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-plastilina/69/share--v1.png",
      path: AuthenticatedUserRouters.REFERRAL_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Investement",
      value: `$ ${Number(totalIncome?.totalTransaction ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/transaction.png",
      path: AuthenticatedUserRouters.INVESTMENT_HISTORY,
    },
    {
      title: "Today Investement",
      value: `$ ${Number(totalIncome?.todayTransaction ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/exchange.png",
      path: AuthenticatedUserRouters.INVESTMENT_HISTORY,
      data: "today",
    },
    {
      title: "Total Team Transaction",
      value: `$ ${Number(totalIncome?.totalTeamTransaction ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/color/48/transaction.png",
      path: AuthenticatedUserRouters.TRANSACTIONS,
    },
    {
      title: "Today Team Transaction",
      value: `$ ${Number(totalIncome?.todayTeamTransaction ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/pulsar-gradient/48/refund-2.png",
      path: AuthenticatedUserRouters.TRANSACTIONS,
      data: "today",
    },
    {
      title: "Total Withdrawals",
      value: `$ ${Number(totalIncome?.totalWithdraw ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png",
      path: AuthenticatedUserRouters.WITHDRAWAL_HISTORY,
    },
    {
      title: "Today Withdrawals",
      value: `$ ${Number(totalIncome?.todayWithdraw ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/isometric/50/card-in-use.png",
      path: AuthenticatedUserRouters.WITHDRAWAL_HISTORY,
      data: "today",
    },
    {
      title: "Total Income",
      value: `$ ${Number(totalIncome?.totalIncome ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/sales-performance.png",
      path: AuthenticatedUserRouters.INCOME_HISTORY,
    },
    {
      title: "Today Income",
      value: `$ ${Number(totalIncome?.todayIncome ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/money-transfer.png",
      path: AuthenticatedUserRouters.INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Rank & Reward",
      value: `$ ${Number(totalIncome?.totalRankReward ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png",
      path: AuthenticatedUserRouters.RANK_REWARD_HISTORY,
      data: "today",
    },
    {
      title: "Today Live A/C Income",
      value: `$ ${Number(totalIncome?.todayLiveTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/account-1.png",
      path: AuthenticatedUserRouters.TRADING_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Live A/C Income",
      value: `$ ${Number(totalIncome?.totalLiveTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/change-user.png",
      path: AuthenticatedUserRouters.TRADING_INCOME_HISTORY,
    },
  ];

  const cardData = [
    {
      title: "All Users",
      value: `${Number(totalIncome?.users ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/group--v2.png",
      path: AuthenticatedAdminRouters.ALL_USERS,
    },
    {
      title: "Active Users",
      value: ` ${Number(totalIncome?.userActive ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/group.png",
      path: AuthenticatedAdminRouters.ALL_USERS,
      data: "active",
    },
    {
      title: "Inactive Users",
      value: ` ${Number(totalIncome?.userInactive ?? 0)}`,
      icon: "https://img.icons8.com/3d-fluency/94/group--v4.png",
      path: AuthenticatedAdminRouters.ALL_USERS,
      data: "inactive",
    },
    {
      title: "Today Income",
      value: `$ ${Number(totalIncome?.todayIncome ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/cash-in-hand.png",
      path: AuthenticatedAdminRouters.INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Income",
      value: `$ ${Number(totalIncome?.totalIncome ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/stack-of-coins.png",
      path: AuthenticatedAdminRouters.INCOME_HISTORY,
    },
    {
      title: "Today Referral Income",
      value: `$ ${Number(totalIncome?.todayReferral ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-plastilina/69/share--v1.png",
      path: AuthenticatedAdminRouters.REFERRAL_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Referral Income",
      value: `$ ${Number(totalIncome?.totalReferral ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-plastilina/69/share--v1.png",
      path: AuthenticatedAdminRouters.REFERRAL_INCOME_HISTORY,
    },
    {
      title: "Today Withdraw",
      value: `$ ${Number(totalIncome?.todayWithdraw ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/atm.png",
      path: AuthenticatedAdminRouters.APPROVED_WITHDRAWAL_REQUEST,
      data: "today",
    },
    {
      title: "Total Withdraw",
      value: `$ ${Number(totalIncome?.totalWithdraw ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/money-bag.png",
      path: AuthenticatedAdminRouters.APPROVED_WITHDRAWAL_REQUEST,
    },
    {
      title: "Today Level Income",
      value: `$ ${Number(totalIncome?.todayLevel ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/bar-chart.png",
      path: AuthenticatedAdminRouters.LEVEL_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Level Income",
      value: `$ ${Number(totalIncome?.totalLevel ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/bar-chart.png",
      path: AuthenticatedAdminRouters.LEVEL_INCOME_HISTORY,
    },
    {
      title: "Today Matching Income",
      value: `$ ${Number(totalIncome?.todayMatching ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/handshake.png",
      path: AuthenticatedAdminRouters.MATCHING_INCOME_HISTORY,
      data: "today",
    },
    {
      title: "Total Matching Income",
      value: `$ ${Number(totalIncome?.totalMatching ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/handshake.png",
      path: AuthenticatedAdminRouters.MATCHING_INCOME_HISTORY,
    },
    {
      title: "Today Global Achievers",
      value: `${Number(totalIncome?.todayGlobalAchiever ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/contract.png",
      path: AuthenticatedAdminRouters.GLOBAL_ACHIEVERS,
      data: "today",
    },
    {
      title: "Total Global Achievers",
      value: `${Number(totalIncome?.totalGlobalAchiever ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/contract.png",
      path: AuthenticatedAdminRouters.GLOBAL_ACHIEVERS,
    },
    {
      title: "Today Transaction",
      value: `$ ${Number(totalIncome?.todayTransaction ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/transaction.png",
      path: AuthenticatedAdminRouters.TOTAL_TRANSACTIONS,
      data: "today",
    },
    {
      title: "Total Transaction",
      value: `$ ${Number(totalIncome?.totalTransaction ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/transaction.png",
      path: AuthenticatedAdminRouters.TOTAL_TRANSACTIONS,
    },
    {
      title: "Today Trading",
      value: `$ ${Number(totalIncome?.todayTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/candle-sticks.png",
      path: AuthenticatedAdminRouters.TRADING_LIST,
      data: "today",
    },
    {
      title: "Total Trading",
      value: `$ ${Number(totalIncome?.totalTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/candle-sticks.png",
      path: AuthenticatedAdminRouters.TRADING_LIST,
    },
    {
      title: "Today LiveTrading",
      value: `$ ${Number(totalIncome?.todayLiveTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/radio-waves.png",
      path: AuthenticatedAdminRouters.TRADING_LIST,
      data: "today",
    },
    {
      title: "Total LiveTrading",
      value: `$ ${Number(totalIncome?.totalLiveTrading ?? 0).toFixed(2)}`,
      icon: "https://img.icons8.com/3d-fluency/94/radio-waves.png",
      path: AuthenticatedAdminRouters.TRADING_LIST,
    },
  ];

  return (
    <div className="space-y-8">
      {role === "USER" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueOverview.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              iconImage={item.icon}
              change={item.change}
              changeType={item.changeType}
              path={item.path}
              data={item.data}
            />
          ))}
        </div>
      )}

      {role === "USER" && (
        <div
          className="w-full relative h-52 object-center object-cover rounded-xl overflow-hidden flex items-center justify-end px-20"
          style={{
            backgroundImage: `url(${aiTradeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full bg-[#0000004f] absolute top-0 z-10 left-0"></div>
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer relative z-50"
            onClick={() => navigate(AuthenticatedUserRouters.AI_TRADE)}
          >
            AI Trade Bot
          </button>
        </div>
      )}
      {role === "USER" && <UserActivityProgress />}

      {role === "ADMIN" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              iconImage={item.icon}
              change={item.change}
              changeType={item.changeType}
              path={item.path}
              data={item.data}
            />
          ))}
        </div>
      )}

      {role === "USER" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <EarningsChart />
          </div>

          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
        </div>
      )}

      <Transactions history={transactionHistory} />
    </div>
  );
};

export default Dashboard1;
