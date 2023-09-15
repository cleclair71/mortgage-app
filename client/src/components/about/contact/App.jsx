import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../../Main/header/Header';

import Contact from './Contact';
import Map from './Map';
import Footer from '../../Partials/footer/Footer';

import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/homeF.jpg';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Dora Main AMP | Main Mortgage | The Mortgage Professionals</title>
                <meta name="description" content="Reach out to Dora Main AMP at Main Mortgage, The Mortgage Professionals. We're here to answer your questions and guide you through the mortgage application process." />
                <meta name="keywords" content="Dora Main, Main Mortgage, Mortgage Professionals, contact, mortgage questions, AMP, mortgage application, mortgage help, mortgage guidance, customer service, home purchase, mortgage rates, refinancing, Canada" />
            </Helmet>
            <Header />
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="top" m="2rem" h="80vh">
                
                {/* <BannerContent /> */}
            </Box>
            <Box
                pb="5em"
                w={{ base: "100%", sm: "100%", md: "80%" }}
                mx={{ base: "0", sm: "0", md: "auto" }}
                bgColor="white"
                mt="-30em"
                p="2em"
                borderRadius="md"
                boxShadow="0 0 10px rgba(0,0,0,0.2)"
                mb="5em"
            >
                <VStack pb="5">
                    <Contact />
                    {/* <Map /> */}

                </VStack>
                
                
            </Box>
            <Footer />
            
        </>
    )
}

export default ContactPage;