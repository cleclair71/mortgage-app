import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header/Header';
import NextSteps from './NextSteps';
import About from './About';
import Footer from '../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../assets/homeH.jpg';

const TestPage = () => {
    return (
        <>
       
            <Header />
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="top" m="2rem" h="85vh">
            <div>This is a test page to check if JWT authentication is working. This page will only be accessible to users who are logged in and will redirect to a login page if not</div>
                <BannerContent />
            </Box>
            <VStack pb="5">
            </VStack>
            <Footer />
        </>
    )
}

export default TestPage;