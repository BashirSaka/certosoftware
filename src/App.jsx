import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import Home from "./Components/pages/Home";
import SignIn from "./Components/pages/SignIn";
import Help from "./Components/pages/Help";
import About from "./Components/pages/About";
import Insights from "./Components/pages/Insights";
import InsightDetail from "./Components/pages/InsightDetail";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
