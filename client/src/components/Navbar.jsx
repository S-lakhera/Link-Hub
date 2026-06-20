import { Link, NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";
import useAuth from "../hooks/useAuth.js";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          LinkHub
        </Link>

        {!user ? (
          /* Guest Navbar */
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          /* Authenticated Navbar */
          <div className="flex items-center gap-5">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500"
                }`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500"
                }`
              }
            >
              <BarChart3 size={18} />
              Analytics
            </NavLink>

            {/* Public Profile */}
            <button
              onClick={() =>
                navigate(`/${user.username}`)
              }
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
            >
              <User size={20} />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;