import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="w-full mx-auto px-4">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;