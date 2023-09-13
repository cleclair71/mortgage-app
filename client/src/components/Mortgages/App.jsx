import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Box, VStack, Tabs } from "@chakra-ui/react";
import Header from '../Main/header/Header';
import Footer from '../Partials/footer/Footer';
import BannerContent from './components/Banner';
import HeaderImage from '../../assets/pexels-melike-benli-10093329.jpg';
import MortgageTabList from './components/TabList';
import MortgageRoutes from './MortgageRoutes';
import LoadableComponent from '../../utils/LoadableComponent';


const MortgagePage = () => {
    const location = useLocation();
    const [tabIndex, setTabIndex] = useState(
        location.pathname === '/Mortgages/home-purchase' ? 0 :
            location.pathname === '/Mortgages/building' ? 1 :
            location.pathname === '/Mortgages/refinance' ? 2 :
            location.pathname === '/Mortgages/renewing' ? 3 : 4
    );
    useEffect(() => {
        setTabIndex(
            location.pathname === '/Mortgages/home-purchase' ? 0 :
            location.pathname === '/Mortgages/building' ? 1 :
            location.pathname === '/Mortgages/refinance' ? 2 :
            location.pathname === '/Mortgages/renewing' ? 3 : 4
        );
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Mortgage Information | Dora Main | Main Mortgage | The Mortgage Professionals </title>
                <meta name="description" content="Get comprehensive information about mortgages, home purchase, home building, refinancing, and mortgage renewing. Perfect for first-time home buyers and those seeking to understand mortgage procedures in Canada." />
                <meta name="keywords" content="Mortgage, Home purchase, Building home, Refinancing, Mortgage renewing, First time home buyer, Canada, Mortgage rates, Home buying, Mortgage procedure, Home loan, Property loan, Switching mortgage, Mortgage incentive, Interest rates, Down payment, House building" />
            </Helmet>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="80vh"  w={{ base: "100vw", sm: "100vw", md: "100vw", lg: "100vw", xl: "100%", '2xl': "100%" }}>
                <Header />
                <BannerContent />
            </Box>
            <Box
                pb="5em"
                w="100%" // 100% width for all breakpoints
                mx={{ base: "0", sm: "0", md: "auto" }}
                bgColor="white"
                mt="-16em"
                p="2em"
                borderRadius="md"
                boxShadow="0 0 10px rgba(0,0,0,0.2)"
                mb="5em"
            >
                <VStack pb="5" w="100%"> {/* 100% width for all breakpoints */}
                    <Tabs variant="enclosed" index={tabIndex}>
                        <MortgageTabList tabIndex={tabIndex} />
                    </Tabs>
                    <Box mt={5}>
                        <MortgageRoutes />
                    </Box>
                </VStack>
            </Box>
            <Footer />
        </>
    )
}

export default MortgagePage;