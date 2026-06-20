import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              LinkHub
            </h3>

            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Create one beautiful link page, share it
              everywhere, and understand what your audience
              actually clicks.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Product
            </h4>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/register">Get Started</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Resources
            </h4>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Contact
            </h4>

            <p className="text-sm text-slate-500">
              support@linkhub.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} LinkHub. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;