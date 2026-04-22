import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Login from "./components/app/Login";

import BrandWelcome from "./components/app/brand/BrandWelcome";
import BrandDeposit from "./components/app/brand/BrandDeposit";
import BrandCampaign from "./components/app/brand/BrandCampaign";
import BrandDashboard from "./components/app/brand/BrandDashboard";

import DistributorCampaigns from "./components/app/distributor/DistributorCampaigns";
import DistributorSubmit from "./components/app/distributor/DistributorSubmit";
import DistributorVerification from "./components/app/distributor/DistributorVerification";
import DistributorEarnings from "./components/app/distributor/DistributorEarnings";
import DistributorProfile from "./components/app/distributor/DistributorProfile";

import AdminOverview from "./components/app/admin/AdminOverview";
import AdminSubmissions from "./components/app/admin/AdminSubmissions";
import AdminFraud from "./components/app/admin/AdminFraud";
import AdminUsers from "./components/app/admin/AdminUsers";
import AdminSettings from "./components/app/admin/AdminSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />

        <Route path="/brand/welcome" element={<BrandWelcome />} />
        <Route path="/brand/deposit" element={<BrandDeposit />} />
        <Route path="/brand/campaign/new" element={<BrandCampaign />} />
        <Route path="/brand/dashboard" element={<BrandDashboard />} />

        <Route path="/distributor/campaigns" element={<DistributorCampaigns />} />
        <Route path="/distributor/submit" element={<DistributorSubmit />} />
        <Route path="/distributor/verification" element={<DistributorVerification />} />
        <Route path="/distributor/earnings" element={<DistributorEarnings />} />
        <Route path="/distributor/profile" element={<DistributorProfile />} />

        <Route path="/admin" element={<AdminOverview />} />
        <Route path="/admin/submissions" element={<AdminSubmissions />} />
        <Route path="/admin/fraud" element={<AdminFraud />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
