import React from 'react';
import Header from '../../Main/header/Header';
import DocumentChecklist from './Docs';
import Footer from '../../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';
import { Helmet } from "react-helmet";

const DocPage = () => {
    return (
        <>
            <Helmet>
                <title>Document Checklist | Mortgage Application</title>
                <meta name="description" content="Find what documents you need for your mortgage application like most recent pay stubs, T1 general tax form, Notice of Assessment, T4 tax form, letter of employment, credit score, mortgage pre-approval letter, bank statements, list of assets and investments, and more." />
                <meta name="keywords" content="most recent pay stubs, T1 general tax form, Notice of assessment, T4 tax form, Letter of employment, Credit score, Mortgage pre-approval letter, Bank statements, List of assets and investments, Statement of savings or investments, Sale agreement of existing property, RRSP withdrawals, Gift letter, Final purchase and sale agreement, MLS Listing, Legal description of the home, Homeowners insurance policy, Lenders' title insurance" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Header />
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="center" m="2rem" h="100vh">
                
                <BannerContent />
            </Box>
            <Box
                pb="5em"
                w={{ base: "100%", sm: "100%", md: "80%" }}
                mx={{ base: "0", sm: "0", md: "auto" }}
                bgColor="white"
                mt="-25em"
                p="2em"
                borderRadius="md"
                boxShadow="0 0 10px rgba(0,0,0,0.2)"
                mb="5em"
            >
                <VStack pb="5">
                    <DocumentChecklist />
                </VStack>
            </Box>
            <Footer />
        </>
    )
}

export default DocPage;