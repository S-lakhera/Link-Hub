import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import DashBoardLayout from "./layouts/DashBoardLayout";
import PublicLayout from './layouts/PublicLayout'

import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./features/home/pages/LandingPage";
import PublicProfile from "./features/public-profile/pages/PublicProfile";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Profile from "./features/profile/pages/Profile";
import AuthRoute from "./routes/AuthRoute";


const router = createBrowserRouter([
  {
    element: (
      <AuthRoute>
        <AuthLayout />
      </AuthRoute>
    ),
    children: [

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

    ],
  },
  {
    element: <PublicRoute>
      <PublicLayout />
    </PublicRoute>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/:username",
        element: <PublicProfile />,
      },
    ]
  },

  {
    element: (
      <ProtectedRoute>
        <DashBoardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;