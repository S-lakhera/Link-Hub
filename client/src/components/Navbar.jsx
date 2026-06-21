import { Link, NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Link as LinkIcon,
  LogOut,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/80
        bg-white/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div
              className="
                h-9
                w-9
                rounded-xl
                bg-slate-900
                text-white
                flex
                items-center
                justify-center
                font-bold
                font-sora
                transition-transform
                duration-300
                group-hover:rotate-6
              "
            >
              <LinkIcon size={21} />
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  font-black
                  font-sora
                  text-slate-900
                "
              >
                LinkHub
              </h1>
            </div>
          </Link>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="
                  px-4
                  py-2
                  rounded-xl
                  font-medium
                  text-slate-600
                  hover:text-slate-900
                  transition-colors
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                  rounded-xl
                  bg-slate-900
                  px-5
                  py-2.5
                  text-white
                  font-medium
                  hover:scale-105
                  transition-all
                "
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Navigation Pills */}
              <div
                className="
                  hidden
                  md:flex
                  items-center
                  gap-1
                  rounded-full
                  bg-slate-100
                  p-1
                "
              >
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    ${isActive
                      ? "bg-white shadow-sm text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                    }
                  `
                  }
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </NavLink>
              </div>

              {/* Profile Button */}
              <button
                onClick={() =>
                  navigate(`/profile`)
                }
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-slate-100
                  pl-2
                  pr-4
                  py-2
                  hover:bg-slate-200
                  transition-colors
                "
              >
                <img
                  src={
                    user?.avatar ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500"
                  }
                  alt={user?.name}
                  className="
                    h-9
                    w-9
                    rounded-full
                    object-cover
                    border-2
                    border-white"
                />

                <span
                  className="
                    hidden
                    lg:block
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  @{user.username}
                </span>
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-3
                  py-2
                  text-slate-500
                  hover:text-red-500
                  transition-colors
                "
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;