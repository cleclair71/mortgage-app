import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Main/header/Header';
import FAQ from './FAQ';
import Footer from '../../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';

const FAQPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Find answers to common mortgage-related FAQs." />
                <meta name="keywords" content="how much can I afford to pay for a home, home inspection, minimum down payment, home loan insurance, conventional mortgage, bankruptcy affecting mortgage qualification, child support affecting mortgage qualification, using gift funds to get a mortgage, pre-approved mortgage, renewing a mortgage, paying off your mortgage faster, RRSP, costs associated with buying a home, length of mortgage terms, monthly costs of owning a home, fixed-rate mortgage, variable-rate mortgage, high ratio mortgage, 25-year amortization, 30-year amortization, consumer proposal, probation, old appraisal report, credit score, multi-offer, assignment of rents, low appraisal, condo status certificate, bi-weekly mortgage payments, GDSR, TDSR, maternity leave affecting mortgage approval, CRA debt, refinance fees, cost of a mortgage agent, bridge a mortgage, cheap real estate lawyer, job change post mortgage approval, prequalified vs. preapproved, property taxes, how quickly will our mortgage close, consumer proposal, private mortgage, LTV, closing costs, mortgage stress test, mortgage lender, pre-approval, 20% down payment, appraisal value" />
                <meta name="robots" content="index, follow" />
            </Helmet>
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
                    <FAQ />
                </VStack>
            </Box>
            <Footer />
        </>
    )
}

export default FAQPage;