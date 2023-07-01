import React from 'react';
import Header from '../../Main/header/Header';
import FAQ from './FAQ';

import Footer from '../../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';

const FAQPage = () => {
    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="100vh">
                <Header />
                <BannerContent />
            </Box>
            <VStack pb="5">
                <FAQ />
                
            </VStack>
            <Footer />
        </>
    )
}

export default FAQPage;