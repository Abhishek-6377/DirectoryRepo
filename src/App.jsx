// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Directory from "./pages/Directory";
// import Membership from "./pages/membership/Membership";
import Dashboard from "./pages/Dashboard";
import AdminDirectory from "./pages/AdminDirectory";
import CouponUsageTable from "./components/coupon/CouponUsageTable";
import ThankYou from "./pages/ThankYou";
import PaymentPage from "./pages/PaymentPage";
import NextPage1 from "./components/membership3/NextPage1";
import NextPage2 from "./components/membership3/NextPage2";
// import Membership2 from "./pages/membership/Membership2";
import Membership3 from "./pages/membership/Membership3";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // ✅ Fixed array
  const hideNavbarPaths = ["/dashboard", "/admin-directory"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="flex">
      {/* Sidebar */}
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}

      {/* Main content */}
      <div className="flex-1">
        {/* ✅ Conditional Navbar */}
        {!shouldHideNavbar && (
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/membership3" element={<Membership3 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-directory" element={<AdminDirectory />} />
            <Route path="/used-code" element={<CouponUsageTable/>} />
            <Route path="/thank-you" element={<ThankYou/>}/>
            <Route path="/payment-page" element={<PaymentPage/>}/>
            <Route path="/next-page1" element={<NextPage1/>}/>
            <Route path="/next-page2" element={<NextPage2/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
