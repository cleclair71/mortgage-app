import HeaderImage from './assets/ficus.png';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from "styled-components";
import BannerContent from './components/Main/Banner';
import Header from './components/Main/Header';
import NextSteps from './components/Main/NextSteps';
import About from './components/Main/About';
import Footer from './components/Partials/footer/Footer';

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
              <Banner>
                <Header />
                <BannerContent />
              </Banner>
              <NextSteps />
              <About />
              <Footer />
            </>
          } />
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
        const Banner = styled.div`
        background: url(${HeaderImage});
        background-size: cover;
        background-position: center;
        margin: 1rem;
        height: 100vh;
        @media (max-width: 640px) {
          height: 100%;
        padding-bottom: 2rem;
}
        `;     