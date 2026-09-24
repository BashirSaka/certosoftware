// src/pages/SignIn.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, CheckCircle, LogOut, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/useAuth";

export default function SignIn() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }

    // Perform login
    login({ email: email.trim() });
    setIsSuccess(true);

    // Redirect after brief delay so user sees confirmation
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  // If user is already authenticated
  if (isAuthenticated && !isSuccess) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 bg-[#F3F8FF] px-6 py-20 font-Inter">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col items-center text-center gap-4 border border-gray-100">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
            <CheckCircle size={32} />
          </div>
          <h1 className="text-[#02033B] font-bold text-2xl">
            You're already signed in
          </h1>
          <p className="text-gray-600 text-sm">
            Signed in as <span className="font-semibold text-[#02033B]">{user.email}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
            <Link
              to="/"
              className="flex-1 cursor-pointer bg-[#4335DE] hover:bg-[#3226b8] text-white font-bold rounded-full py-2.5 px-4 text-center text-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Go to Home</span>
              <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              onClick={logout}
              className="flex-1 cursor-pointer border-2 border-[#02033B] hover:bg-gray-100 text-[#02033B] font-bold rounded-full py-2.5 px-4 text-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 bg-[#F3F8FF] px-6 py-20 font-Inter">
      <div className="text-center">
        <h1 className="text-[#02033B] font-bold text-3xl min-[769px]:text-4xl mb-2">
          Sign in to Certo
        </h1>
        <p className="text-gray-600 text-sm">
          Access your security dashboard and protected devices
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-100">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center py-6 gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <CheckCircle size={28} />
            </div>
            <h2 className="text-[#02033B] font-bold text-xl">Signed in successfully!</h2>
            <p className="text-sm text-gray-500">Redirecting to homepage...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 text-red-700 px-4 py-2.5 rounded-lg text-sm border border-red-200">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-bold text-[#02033B] uppercase tracking-wide"
              >
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail
                  size={18}
                  className="absolute left-4 text-gray-400 pointer-events-none"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-300 focus:border-[#4335DE] rounded-full pl-11 pr-4 py-2.5 focus:outline-none text-[#02033B] text-sm transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs font-bold text-[#02033B] uppercase tracking-wide"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <Lock
                  size={18}
                  className="absolute left-4 text-gray-400 pointer-events-none"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-300 focus:border-[#4335DE] rounded-full pl-11 pr-11 py-2.5 focus:outline-none text-[#02033B] text-sm transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 text-gray-400 hover:text-[#02033B] transition-colors cursor-pointer focus:outline-none flex items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-1">
              Tip: Enter your email and any password to test signing in.
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-[#4335DE] hover:bg-[#3226b8] text-white font-bold rounded-full py-3 mt-2 transition-colors flex items-center justify-center gap-2"
            >
              <span>Sign In</span>
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}