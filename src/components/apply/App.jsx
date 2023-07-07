import React from 'react';
import Header from '../Main/header/Header';
// import BannerContent from './Banner';
import Apply from './Apply';

import Footer from '../Partials/footer/Footer';

import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../assets/ficus.png';

const ApplyPage = () => {
    return (
        <>
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="1rem" h="50vh">
                <Header />
                {/* <BannerContent /> */}
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