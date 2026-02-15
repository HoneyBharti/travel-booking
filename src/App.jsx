import React from "react";
import Homepage from "./pages/Homepage";

import { BrowserRouter , Routes , Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/Privacy";
import ScrollToTop from "./components/Scrolltotop";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/terms" element={<TermsPage />} />
         <Route path="/privacy-policy" element={<PrivacyPage />} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
