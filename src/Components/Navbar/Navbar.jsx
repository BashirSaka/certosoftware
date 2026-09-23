import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import Logo from "../../assets/logo.png";
import Button from "../../Components/Button/Button";
import { useAuth } from "../../context/useAuth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-[#F3F8FF]/95 backdrop-blur-md shadow-xs border-b border-[#02033B]/5 flex justify-between items-center py-4 px-6 min-[769px]:px-20 transition-all">
      <Link to="/">
        <img
          src={Logo}
          className="w-24 min-[769px]:w-28"
          alt="certosoftware logo"
        />
      </Link>

      <div className="hidden min-[769px]:flex items-center gap-10 relative z-50">
        <ul className="text-base font-Inter flex gap-8 font-bold items-center text-[#02033B] min-[769px]:pr-16">
          <li className="cursor-pointer hover:text-[#4335DE] transition-colors">
            <a href="/#get-app">iPhone</a>
          </li>
          <li className="cursor-pointer hover:text-[#4335DE] transition-colors">
            <a href="/#get-app">Android</a>
          </li>
          <li className="cursor-pointer hover:text-[#4335DE] transition-colors">
            <Link to="/help">Help</Link>
          </li>
          <li className="flex items-center  cursor-pointer hover:text-[#4335DE] transition-colors">
            <Link to="/about" className="flex items-center gap-1">
              Company
            </Link>
          </li>
        </ul>

        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm font-semibold text-[#02033B] shadow-xs">
              <div className="w-6 h-6 rounded-full bg-[#4335DE] text-white flex items-center justify-center text-xs font-bold uppercase">
                {user.name ? user.name[0] : <User size={14} />}
              </div>
              <span className="max-w-[120px] truncate" title={user.email}>
                {user.name || user.email}
              </span>
            </div>
            <Button
              onClick={logout}
              className="bg-[#02033B] hover:bg-[#1a1c6a] px-4 py-2 rounded-lg text-white whitespace-nowrap shrink-0 flex items-center gap-1 text-sm font-semibold cursor-pointer"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </Button>
          </div>
        ) : (
          <Button
            to="/sign-in"
            className="bg-[#4335DE] hover:bg-[#3226b8] cursor-pointer px-6 py-2 rounded-lg text-white whitespace-nowrap shrink-0 font-semibold"
            text="Sign In"
          />
        )}
      </div>

      <button
        className="cursor-pointer min-[769px]:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F3F8FF] shadow-lg border-b border-gray-200/60 flex flex-col gap-6 p-6 min-[769px]:hidden z-50 max-h-[calc(100vh-70px)] overflow-y-auto">
          <ul className="flex flex-col gap-4 font-bold text-[#02033B]">
            <li>
              <a href="/#get-app" onClick={() => setIsOpen(false)}>
                iPhone
              </a>
            </li>
            <li>
              <a href="/#get-app" onClick={() => setIsOpen(false)}>
                Android
              </a>
            </li>
            <li>
              <Link to="/help" onClick={() => setIsOpen(false)}>
                Help
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1"
              >
                Company
              </Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#4335DE] text-white flex items-center justify-center font-bold uppercase shrink-0">
                  {user.name ? user.name[0] : <User size={18} />}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-medium">Signed in as</p>
                  <p className="font-semibold text-sm text-[#02033B] truncate" title={user.email}>
                    {user.email}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="cursor-pointer bg-[#02033B] hover:bg-[#1a1c6a] px-4 py-2.5 rounded-lg text-white w-full font-semibold flex items-center justify-center gap-2"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button
              to="/sign-in"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer bg-[#4335DE] hover:bg-[#3226b8] px-4 py-2.5 rounded-lg text-white w-full text-center font-semibold"
              text="Sign In"
            />
          )}
        </div>
      )}
    </nav>
  );
}
