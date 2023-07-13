import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../Main/header/Header';
import Apply from './Apply';
import Footer from '../Partials/footer/Footer';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../assets/ficus.png';

const ApplyPage = () => {
    return (
        <>
            <Helmet>
                <title>Apply for a Mortgage Today | Main Mortgage</title>
                <meta name="description" content="Apply for a mortgage with Main Mortgage. Our mortgage agent, Dora Main, will guide you through the process and answer any questions you have about home loans, interest rates, refinancing, and more." />
                <meta name="keywords" content="Mortgage application, Apply for mortgage, Main Mortgage, Dora Main, Home loan, Mortgage rates, Refinancing, Home purchase, Building home, Mortgage renewing, Switching mortgage, Canada, Mortgage procedure, Interest rates, Down payment, House building" />
            </Helmet>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="50vh">
                <Header />
            </Box>
            <Box
                pb="5em"
                w={{ base: "100%", sm: "100%", md: "80%" }}
                mx={{ base: "0", sm: "0", md: "auto" }}
                bgColor="white"
                mt="-16em"
                p="2em"
                borderRadius="md"
                boxShadow="0 0 10px rgba(0,0,0,0.2)"
                mb="5em"
            >
            <VStack pb="5">
                <Apply />
                
            </VStack>
            </Box>
            <Footer />
        </>
    )
}

export default ApplyPage;