import HeaderImage from './assets/ficus.png';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from "styled-components";
import MainPage from './components/Main/App';
import Affordability from './components/Calculators/affordability/App.jsx';

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
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <MainPage />
            </>
          } />
          <Route path="/affordability" element={<Affordability />} />
        </Routes>
      </Container>
    </Router>
        );
}

        function ScrollToHash() {
          useScrollToHash();
        return null;
}

        export default App;

        const Container = styled.div``;
           