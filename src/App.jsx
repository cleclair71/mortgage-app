import { Box, Spinner } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";

const MainPage = lazy(() => import('./components/Main/App'));
const CalculatorPage = lazy(() => import('./components/Calculators/App.jsx'));
const ContactPage = lazy(() => import('./components/about/contact/App.jsx'));
const GlossaryPage = lazy(() => import('./components/Resources/glossary/App'));
const FAQPage = lazy(() => import('./components/Resources/FAQ/App'));
const ApplyPage = lazy(() => import('./components/apply/App'));
const DocPage = lazy(() => import('./components/Resources/documents/App'));

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
          <Suspense fallback={<Spinner />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/calculators/*" element={<CalculatorPage />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/glossary-page" element={<GlossaryPage />} />
            <Route path="/faq-page" element={<FAQPage />} />
            <Route path="/apply-page" element={<ApplyPage />} />
            <Route path="/doc-page" element={<DocPage />} />
          </Suspense>
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