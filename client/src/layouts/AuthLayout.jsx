import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white p-12 flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold">Link-Hub</h1>
          <p className="mt-2 text-slate-400">
            Create your personalized bio page and track every click with
            powerful analytics.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Turn Links Into Insights
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>📈 Real-time click analytics</li>
            <li>🔗 Unlimited links</li>
            <li>🎨 Custom profile pages</li>
            <li>📊 Audience engagement tracking</li>
          </ul>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Link-Hub. All rights reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;