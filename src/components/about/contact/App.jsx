import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../../Main/header/Header';
import BannerContent from './Banner';
import Contact from './Contact';
import Map from './Map';
import Footer from '../../Partials/footer/Footer';

import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Dora Main AMP | Main Mortgage | The Mortgage Professionals</title>
                <meta name="description" content="Reach out to Dora Main AMP at Main Mortgage, The Mortgage Professionals. We're here to answer your questions and guide you through the mortgage application process." />
                <meta name="keywords" content="Dora Main, Main Mortgage, Mortgage Professionals, contact, mortgage questions, AMP, mortgage application, mortgage help, mortgage guidance, customer service, home purchase, mortgage rates, refinancing, Canada" />
            </Helmet>
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

export default ContactPage;