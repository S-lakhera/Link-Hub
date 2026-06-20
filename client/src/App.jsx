import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import DashBoardLayout from "./layouts/DashBoardLayout";
import PublicLayout from './layouts/PublicLayout'

import Login from "./features/auth/ui/Login";
import Register from "./features/auth/ui/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const LandingPage = () => <h1>Landing Page</h1>;

const Analytics = () => <h1>Analytics Page</h1>;

const PublicProfile = () => <h1>Public Profile</h1>;

const router = createBrowserRouter([
  {
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
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
        element: <h1>Dashboard</h1>,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;