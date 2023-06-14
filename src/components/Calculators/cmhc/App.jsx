// components/Main/App.js
import React from 'react';
import Header from '../../Main/header/Header';
// import NextSteps from './NextSteps';
// import About from './About';
import Footer from '../../Partials/footer/Footer';
import BannerContent from './Banner';
import styled from 'styled-components';
import HeaderImage from '../../../assets/pexels-melike-benli-10093329.jpg';
import CMHCCalculator from './CMHC';

const CMHCCalc = () => {
    return (
        <>
            <Banner>
                <Header />
               <BannerContent />
              </Banner>
              <CMHCCalculator />
              {/* <Card /> */}
              {/* <NextSteps /> */}
              {/* <About /> */}
              <Footer />
        </>
    )
}

export default CMHCCalc;

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