// // components/Main/App.js
// import React from 'react';
// import Header from './header/Header';
// import NextSteps from './NextSteps';
// import About from './About';
// import Footer from '../Partials/footer/Footer';
// import BannerContent from './Banner';
// import styled from 'styled-components';
// import HeaderImage from '../../assets/ficus.png';

// const MainPage = () => {
//     return (
//         <>
//             <Banner>
//                 <Header />
//                 <BannerContent />
//               </Banner>
//               <NextSteps />
//               <About />
//               <Footer />
//         </>
//     )
// }

// export default MainPage;

// const Banner = styled.div`
//         background: url(${HeaderImage});
//         background-size: cover;
//         background-position: center;
//         margin: 1rem;
//         height: 100vh;
//         @media (max-width: 640px) {
//           height: 100%;
//         padding-bottom: 2rem;
// }
//         `;

// components/Main/App.js
import React from 'react';
import Header from './header/Header';
import NextSteps from './NextSteps';
import About from './About';
import Footer from '../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../assets/ficus.png';

const MainPage = () => {
    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="100vh">
                <Header />
                <BannerContent />
            </Box>
            <VStack pb="5">
                <NextSteps />
                <About />
                
            </VStack>
            <Footer />
        </>
    )
}

export default MainPage;