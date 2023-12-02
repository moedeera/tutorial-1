import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SiteContextProvider } from "./Context/Context";

import { Homepage } from "./Pages/Homepage/Homepage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <SiteContextProvider>
      <div className="main">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
