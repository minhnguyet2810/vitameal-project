import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import MenuPage from "@/react-app/pages/Menu";
import SubscriptionPage from "@/react-app/pages/Subscription";
import DashboardPage from "@/react-app/pages/Dashboard";
import AboutPage from "@/react-app/pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
