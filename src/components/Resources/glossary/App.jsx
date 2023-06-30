import React from 'react';
import Header from '../../Main/header/Header';
import Glossary from './Glossary';

import Footer from '../../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';

const GlossaryPage = () => {
    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="100vh">
                <Header />
                <BannerContent />
            </Box>
            <VStack pb="5">
                <Glossary />
                
            </VStack>
            <Footer />
        </>
    )
}

export default GlossaryPage;