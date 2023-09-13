import React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>Dora Main AMP | Mortgage Agent 2 | Main Mortgage | Mortgage Professionals Kingston</title>
                <meta name="description" content="Dora Main AMP is a trusted mortgage agent at Main Mortgage & Mortgage Professionals Kingston in Gananoque, Ontario. We offer personalized home loan solutions, refinancing options, and expert mortgage advice. Contact Dora Main AMP today for your mortgage needs." />
                <meta name="keywords" content="Dora Main AMP, mortgage agent, Main Mortgage, Mortgage Professionals Kingston, Gananoque, Ontario, home loans, refinancing, expert advice, Mortgage lender, home financing, home loans, mortgage rates, first-time homebuyers, first-time buyer incentive, second mortgage, mortgage pre-approval, mortgage calculator, adjustable-rate mortgages, switch mortgage, debt consolidation loans, home equity, home equity loans, mortgage terms, mortgage qualification, down payment assistance, mortgage insurance, reverse mortgages, commercial mortgages" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Dora Main AMP | Mortgage Agent | Main Mortgage & Mortgage Professionals Kingston" />
                <meta property="og:description" content="Dora Main AMP is a trusted mortgage agent at Main Mortgage & Mortgage Professionals Kingston in Gananoque, Ontario. We offer personalized home loan solutions, refinancing options, and expert mortgage advice. Contact Dora Main AMP today for your mortgage needs." />
            </Helmet>
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