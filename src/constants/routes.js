export const LandingRouters = {
  DASHBOARD: "/",

  // BLOCKCHAIN

  BLOCKS: "/blockchain/blocks",
  TRANSACTIONS: "/blockchain/transactions",
  TRANSFERS: "/blockchain/transfers",
  ACCOUNTS: "/blockchain/accounts",
  CONTRACTS: "/blockchain/contracts",

  // GOVERNANCE

  SUPER_REPRESENTATIVES: "/governance/super-representatives",
  VOTES: "/governance/votes",
  YUM_STACKING_GOVERNANCE: "/governance/yum-stacking-governance",

  // REGISTER
  USER_REGISTER: "/register",
  USER_LOGIN: "/login",
  ADMIN_LOGIN: "/admin/login",
};

export const AuthenticatedUserRouters = {
  DASHBOARD: "/",
  MY_TEAM: "/my-team",
  MY_REFERRALS: "/my-referrals",
  INVEST: "/invest",
  MY_EARNING: "/my-earning",
  WITHDRAW: "/withdraw",
  PROFILE: "/profile",
  INVESTMENT_HISTORY: "/investment-history",
  INCOME_HISTORY: "/income-history",
  REFERRAL_INCOME_HISTORY: "/referral-income-history",
  LEVEL_INCOME_HISTORY: "/level-income-history",
  MATCHING_INCOME_HISTORY: "/matching-income-history",
  TRADING_INCOME_HISTORY: "/trading-income-history",
  RANK_REWARD_HISTORY: "/rank-reward-history",
  GLOBAL_ACHIEVERS: "/global-achievers",
  TRANSACTIONS: "/transactions",
  WITHDRAWAL_HISTORY: "/withdrawal-history",
  ROI_HISTORY: "/roi-history",
  GENERATION_ROI_HISTORY: "/generation-roi-history",
  REQUEST_DEPOSIT: "/request-deposit",
  DEPOSIT_WALLET_HISTORY: "/deposit-wallet-history",
  AI_TRADE: "/ai-trade",
  INVESTMENT_REPORT: "/investment-report",
  RAISE_TICKET: "/raise-ticket",
  RAISE_TICKET_HISTORY: "/raise-ticket-history",
  USER_FUND_TRANSFER: "/user-fund-transfer",
  USER_FUND_TRANSFER_HISTORY: "/fund-transfer-history",
}

export const AuthenticatedAdminRouters = {
  ADMIN_DASHBOARD: "/",
  ALL_USERS: "/all-users",
  ACTIVE_USERS: "/active-users",
  INACTIVE_USERS: "/inactive-users",
  WITHDRAWAL_REQUEST: "/withdrawal-request",
  // APPROVED_WITHDRAWAL_REQUEST: "/approved-withdrawal-request",
  APPROVED_WITHDRAWAL_REQUEST: "/approved-withdrawal",
  REJECTED_WITHDRAWAL_REQUEST: "/rejected-withdrawal-request",
  GLOBAL_ACHIEVERS: "/global-achievers",
  TOTAL_TRANSACTIONS: "/total-transactions",
  TRADING_LIST: "/trading-list",
  INCOME_HISTORY: "/income-history",
  REFERRAL_INCOME_HISTORY: "/referral-income-history",
  LEVEL_INCOME_HISTORY: "/level-income-history",
  MATCHING_INCOME_HISTORY: "/matching-income-history",
  RANK_REWARD_HISTORY: "/rank-reward-history",
  MANAGE_PACKAGES: "/manage-packages",  
  ADD_FUND: "/add-fund",
  ADD_FUND_HISTORY: "/add-fund-history",
  USER_ADD_FUND_REQUEST: "/user-add-fund-request",
  USER_FUND_ACCEPTED: "/user-fund-accepted",
  USER_FUND_REJECTED: "/user-fund-rejected",
  MANAGE_RANK_AND_REWARD: "/manage-rank-and-reward",
  MANAGE_GLOBAL_ACHIEVERS_CLUB: "/manage-global-achievers-club",
  PENDING_TICKETS: "/pending-tickets",
  CLOSED_TICKETS: "/closed-tickets",
  CHANGE_PASSWORD: "/change-password",
}