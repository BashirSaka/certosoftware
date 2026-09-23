import { Link } from "react-router-dom";
import { useState } from "react";
import socialmedia from "../../assets/ul.png";
import CertoLogo from "../../assets/ul.png";
import { Minus } from "lucide-react";

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="text-white bg-[#02033B] px-4 pb-16 pt-8 min-[769px]:px-10 min-[769px]:pb-24 min-[769px]:pt-14">
      {/* div holding all other divs (Container) */}
      <div className="flex flex-col px-4 gap-12 min-[769px]:flex-row min-[769px]:px-14 min-[769px]:justify-between">
        {/* 1st div - Branding & Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white font-bold text-lg min-[769px]:text-2xl">
            Scan. Detect. Remove.
          </h2>
          <img
            src={socialmedia}
            alt="social media links"
            className="w-40 min-[769px]:w-64 cursor-pointer"
          />

          <div className="flex gap-4 text-sm text-gray-300">
            <Link
              to="/privacy-policy"
              className="cursor-pointer underline hover:text-[#FFC247] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="cursor-pointer underline hover:text-[#FFC247] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-xs text-gray-300">
            <p>
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>

            <p>
              Re-designed & developed by <strong>SULTAN</strong>
            </p>
          </div>
        </div>

        {/* 2nd div - Navigation Links */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-12">
            <Link to="/" className="border-b-2 border-gray-600 max-w-28 w-fit">
              <h3 className="pb-4 font-bold text-xl cursor-pointer hover:text-[#FFC247] transition-colors">
                Certo
              </h3>
            </Link>
          </div>

          <div className="flex flex-col gap-6 pt-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#FFC247] cursor-pointer hover:text-white transition-colors"
            >
              <Minus /> Home
            </Link>
            
              <a href="/#get-app"
              className="flex items-center gap-2 text-[#FFC247] cursor-pointer hover:text-white transition-colors"
            >
              <Minus /> iPhone
            </a>
            
             <a href="/#get-app"
              className="flex items-center gap-2 text-[#FFC247] cursor-pointer hover:text-white transition-colors"
            >
              <Minus /> Android
            </a>
            <Link
              to="/help"
              className="flex items-center gap-2 text-[#FFC247] cursor-pointer hover:text-white transition-colors"
            >
              <Minus /> Help
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 text-[#FFC247] cursor-pointer hover:text-white transition-colors"
            >
              <Minus /> About
            </Link>
            <Link
              to="/insights"
              className="flex items-center gap-2 text-[#FFC247] cursor-pointer hover:text-white transition-colors"
            >
              <Minus /> Insights
            </Link>
          </div>
        </div>

        {/* 3rd Column - Newsletter & White Card */}
        <div className="flex flex-col gap-6 min-[769px]:max-w-md w-full">
          {/* Newsletter Box */}
          <div className="relative flex flex-col gap-6 bg-[#FFC247] rounded-3xl py-6 px-6 min-[769px]:p-10">
            {isSubscribed ? (
              <div className="flex flex-col items-center justify-center text-center gap-2 py-6">
                <h2 className="text-[#02033B] font-bold text-xl">
                  Thanks for subscribing! 🎉
                </h2>
                <p className="text-[#02033B] text-sm">
                  We've sent a confirmation link to your inbox.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-[#02033B] font-bold text-lg whitespace-nowrap shrink-0 min-[769px]:text-xl">
                  Sign up to our newsletter
                </h2>
                <p className="text-[#02033B] text-sm">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="relative flex items-center mt-2"
                >
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-black w-full rounded-full px-5 py-2.5 pr-28 focus:outline-none focus:ring-0 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="cursor-pointer text-white bg-[#02033B] rounded-full px-5 py-1.5 absolute right-1 hover:bg-opacity-90 transition text-sm font-semibold"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>

          {/* NEW: White Background Card Container */}
          <div className="bg-white rounded-2xl p-6 h-28 w-full shadow-md flex items-center justify-center">
           <img src={CertoLogo} alt="Certosoftware Logo" />
          </div>
        </div>
      </div>

      {/* NEW: Trademark Legal Disclaimer at the Bottom */}
      <div className="px-4 min-[769px]:px-14 mt-16 pt-8 border-t border-gray-800/80">
        <p className="text-[11px] text-gray-400 leading-relaxed max-w-5xl">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
}

