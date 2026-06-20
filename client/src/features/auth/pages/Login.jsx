import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await login(data)
    if (res?.success) {
      navigate("/");
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h2>
        <p className="text-slate-500 mt-2">
          Sign in to your account
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-10 pr-12 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || loading}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition"
        >
          <LogIn size={18} />
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {
        error && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600">
            {error}
          </div>
        )
      }

      <div className="mt-6 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to={"/register"}
         className="font-semibold text-slate-900">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;