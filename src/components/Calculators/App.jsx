import React, { useState, useEffect } from 'react';
import Header from '../Main/header/Header';
import Footer from '../Partials/footer/Footer';
import BannerContent from './Banner';
import HeaderImage from '../../assets/pexels-melike-benli-10093329.jpg';
import Affordability from './Affordability';
import PayCalculator from './Payment';
import CMHCCalculator from './CMHC';
import TransCalculator from './Transfer';
import RenCalculator from './Renewal';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Box, VStack, Tab, Tabs, TabList, TabPanel, TabPanels, useColorModeValue } from "@chakra-ui/react";

const CalculatorPage = () => {
    const location = useLocation();
    const [tabIndex, setTabIndex] = useState(
        location.pathname === '/calculators/affordability' ? 0 :
            location.pathname === '/calculators/payment' ? 1 :
                location.pathname === '/calculators/cmhc' ? 2 :
                    location.pathname === '/calculators/transfer' ? 3 : 4
    );

    useEffect(() => {
        setTabIndex(
            location.pathname === '/calculators/affordability' ? 0 :
                location.pathname === '/calculators/payment' ? 1 :
                    location.pathname === '/calculators/cmhc' ? 2 :
                        location.pathname === '/calculators/transfer' ? 3 : 4
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
                        <TabList bgColor="gray.200" borderRadius='md' mt="-4.5rem">
                            <Tab as={Link} to="/calculators/affordability" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Affordability</Tab>
                            <Tab as={Link} to="/calculators/payment" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Payment</Tab>
                            <Tab as={Link} to="/calculators/cmhc" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>CMHC</Tab>
                            <Tab as={Link} to="/calculators/transfer" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Land Transfer Tax</Tab>
                            <Tab as={Link} to="/calculators/renewal" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Renewal</Tab>
                        </TabList>
                    </Tabs>
                    <Box mt={5}>
                        <Routes>
                            <Route path="affordability" element={<Affordability />} />
                            <Route path="payment" element={<PayCalculator />} />
                            <Route path="cmhc" element={<CMHCCalculator />} />
                            <Route path="transfer" element={<TransCalculator />} />
                            <Route path="renewal" element={<RenCalculator />} />
                        </Routes>
                    </Box>
                </VStack>
            </Box>
            <Footer />
        </>
    )
}

export default CalculatorPage;