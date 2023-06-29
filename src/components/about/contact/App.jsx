import React from 'react';
import Header from '../../Main/header/Header';
import BannerContent from './Banner';
import Contact from './Contact';
import Map from './Map';
import Footer from '../../Partials/footer/Footer';

import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';

const MainPage = () => {
    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="100vh">
                <Header />
                <BannerContent />
            </Box>
            <VStack pb="5">
                <Contact />
                <Map />
                
            </VStack>
            <Footer />
        </>
    )
}

export default MainPage;