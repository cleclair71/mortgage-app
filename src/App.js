import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from "styled-components";

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
          <Route path="/home" element={
            <>
             
          } />
          <Route path="/resume" element={
            <>
              <Resume />
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
