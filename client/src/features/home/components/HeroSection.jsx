import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute left-20 top-10 h-48 w-48 rounded-full bg-blue-300 blur-3xl opacity-60 animate-pulse"></div>

      <div className="absolute right-20 bottom-20 h-48 w-48 rounded-full bg-purple-300 blur-3xl opacity-60 animate-pulse"></div>

      <div className="mx-auto max-w-7xl px-6 pb-28 pt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
              🚀 Analytics First Link Platform
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight">
              Most bio-link tools help you share links.
              <span className="block text-blue-600">
                LinkHub helps you understand them.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-600">
              Create one beautiful page, share every
              important link, and discover exactly
              what your audience clicks.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/register"
                className="rounded-xl bg-slate-900 px-8 py-4 text-white font-semibold flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight size={18} />
              </Link>

              <button className="rounded-xl border px-8 py-4 font-semibold">
                View Demo
              </button>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex justify-center">
            <div className="w-80 rounded-3xl border shadow-2xl p-6 bg-white animate-bounce">
              <div className="h-20 w-20 rounded-full bg-slate-200 mx-auto"></div>

              <h3 className="mt-4 text-center font-bold text-xl">
                @shashank
              </h3>

              <div className="mt-6 space-y-3">
                <button className="w-full rounded-lg bg-slate-100 py-3">
                  Portfolio
                </button>

                <button className="w-full rounded-lg bg-slate-100 py-3">
                  GitHub
                </button>

                <button className="w-full rounded-lg bg-slate-100 py-3">
                  LinkedIn
                </button>
              </div>

              <div className="mt-6 rounded-lg bg-green-50 p-3 text-center">
                25,847 Clicks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;