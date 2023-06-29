import { Box, useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainPage from './components/Main/App';
import Affordability from './components/Calculators/affordability/App.jsx';
import CMHCCalc from './components/Calculators/cmhc/App.jsx';
import TransferCalculator from './components/Calculators/transfer/App.jsx';
import PaymentCalculator from './components/Calculators/payment/App.jsx';
import RenewalCalculator from './components/Calculators/renewal/App.jsx';

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
          <Route path="/" element={
            <>
              <MainPage />
            </>
          } />
          <Route path="/affordability" element={<Affordability />} />
          <Route path="/payment-calculator" element={<PaymentCalculator />} />
          <Route path="/cmhc-calculator" element={<CMHCCalc />} />
          <Route path="/land-transfer" element={<TransferCalculator />} />
          <Route path="/renewal-calculator" element={<RenewalCalculator />} />
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