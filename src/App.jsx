import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import Home from "./Components/pages/Home";
import SignIn from "./Components/pages/SignIn";
import Help from "./Components/pages/Help";
import About from "./Components/pages/About";
import Insights from "./Components/pages/Insights";
import InsightDetail from "./Components/pages/InsightDetail";
import TermsAndPrivacy from "./Components/pages/TermsAndPrivacy";
import { AuthProvider } from "./context/AuthProvider";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route
          path="/privacy-policy"
          element={<TermsAndPrivacy defaultTab="privacy" />}
        />
        <Route
          path="/terms-of-service"
          element={<TermsAndPrivacy defaultTab="terms" />}
        />
        <Route
          path="/privacy"
          element={<TermsAndPrivacy defaultTab="privacy" />}
        />
        <Route
          path="/terms"
          element={<TermsAndPrivacy defaultTab="terms" />}
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
