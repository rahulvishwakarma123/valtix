import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingLayout from "../../layout/LandingLayout";
import Home from "../../screens/landing/Home";
import { LandingRouters } from "../../constants/routes";
import Blocks from "../../screens/landing/Blockchain/Blocks";
import Transactions from "../../screens/landing/Blockchain/Transactions";
import Transfers from "../../screens/landing/Blockchain/Transfers";
import Accounts from "../../screens/landing/Blockchain/Accounts";
import Contracts from "../../screens/landing/Blockchain/Contracts";
import SuperRepresentatives from "../../screens/landing/Governance/SuperRepresentatives";
import Votes from "../../screens/landing/Governance/Votes";
import YumStackingGovernance from "../../screens/landing/Governance/YumStackingGovernance";
import RegisterPage from "../../screens/landing/RegisterPage";
import LoginPage from "../../screens/landing/LoginPage";
import AdminLogin from "../../screens/landing/AdminLogin";
import LoginLayout from "../../layout/LoginLayout";
import LandingPage from "../../screens/landing/LandingPage";

const Auth = () => {
  return (
    <Routes>
      <Route
        path={LandingRouters.USER_REGISTER}
        element={<LoginLayout inner={<RegisterPage />} />}
      />
      <Route
        path={LandingRouters.USER_LOGIN}
        element={<LoginLayout inner={<LoginPage />} />}
      />
      <Route path={LandingRouters.ADMIN_LOGIN} element={<AdminLogin />} />

      <Route
        path={LandingRouters.DASHBOARD}
        element={<LandingLayout inner={<LandingPage />} />}
      />

      {/* ============BLOCKCHAIN ROUTES============== */}

      {/* <Route
        path={LandingRouters.BLOCKS}
        element={<LandingLayout inner={<Blocks />} />}
      />
      <Route
        path={LandingRouters.TRANSACTIONS}
        element={<LandingLayout inner={<Transactions />} />}
      />
      <Route
        path={LandingRouters.TRANSFERS}
        element={<LandingLayout inner={<Transfers />} />}
      />
      <Route
        path={LandingRouters.ACCOUNTS}
        element={<LandingLayout inner={<Accounts />} />}
      />
      <Route
        path={LandingRouters.CONTRACTS}
        element={<LandingLayout inner={<Contracts />} />}
      /> */}

      {/* ============GOVERNANCE ROUTES============== */}

      {/* <Route
        path={LandingRouters.SUPER_REPRESENTATIVES}
        element={<LandingLayout inner={<SuperRepresentatives />} />}
      />
      <Route
        path={LandingRouters.VOTES}
        element={<LandingLayout inner={<Votes />} />}
      />
      <Route
        path={LandingRouters.YUM_STACKING_GOVERNANCE}
        element={<LandingLayout inner={<YumStackingGovernance />} />}
      /> */}
      <Route
        path="*"
        element={<Navigate replace to={LandingRouters.DASHBOARD} />}
      />
    </Routes>
  );
};

export default Auth;
