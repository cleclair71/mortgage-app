import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainPage from './components/Main/App';
import CalculatorPage from './components/Calculators/App.jsx';
import ContactPage from './components/about/contact/App.jsx';
import GlossaryPage from "./components/Resources/glossary/App";
import FAQPage from "./components/Resources/FAQ/App";
import ApplyPage from "./components/apply/App";
import DocPage from "./components/Resources/documents/App";

// scroll to hash
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [hash]);
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Box>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/calculators/*" element={<CalculatorPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/glossary-page" element={<GlossaryPage />} />
          <Route path="/faq-page" element={<FAQPage />} />
          <Route path="/apply-page" element={<ApplyPage />} />
          <Route path="/doc-page" element={<DocPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

function ScrollToHash() {
  useScrollToHash();
  return null;
}

export default App;