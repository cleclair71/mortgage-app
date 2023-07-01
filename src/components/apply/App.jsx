import React from 'react';
import Header from '../Main/header/Header';
import BannerContent from './Banner';
import Apply from './Apply';

import Footer from '../Partials/footer/Footer';

import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../assets/ficus.png';

const ApplyPage = () => {
    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="50vh">
                <Header />
                <BannerContent />
            </Box>
            <VStack pb="5">
                <Apply />
                
            </VStack>
            <Footer />
        </>
    )
}

export default ApplyPage;