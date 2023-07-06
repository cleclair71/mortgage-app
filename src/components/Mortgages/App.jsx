import React, { useState, useEffect } from 'react';
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
            location.pathname === '/Mortgages/commercial' ? 1 :
                location.pathname === '/Mortgages/debt' ? 2 :
                    location.pathname === '/Mortgages/equity' ? 3 :
                    location.pathname === '/Mortgages/private' ? 4 :
                    location.pathname === '/Mortgages/refinance' ? 5 :
                    location.pathname === '/Mortgages/second-mortgage' ? 6 : 7
    );
    useEffect(() => {
        setTabIndex(
            location.pathname === '/Mortgages/home-purchase' ? 0 :
                location.pathname === '/Mortgages/commercial' ? 1 :
                    location.pathname === '/Mortgages/debt' ? 2 :
                        location.pathname === '/Mortgages/equity' ? 3 :
                        location.pathname === '/Mortgages/private' ? 4 :
                        location.pathname === '/Mortgages/refinance' ? 5 :
                        location.pathname === '/Mortgages/second-mortgage' ? 6 : 7
        );
    }, [location]);

    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="100vh">
                <Header />
                <BannerContent />
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