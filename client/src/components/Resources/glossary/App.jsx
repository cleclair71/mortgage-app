import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Main/header/Header';
import Glossary from './Glossary';
import Footer from '../../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack } from "@chakra-ui/react";
import HeaderImage from '../../../assets/ficus.png';

const GlossaryPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Browse our comprehensive glossary of mortgage terms. Learn the definitions and meanings of common mortgage-related terms such as adjustable interest rate mortgage, amortization, application, appraisal, and more." />
                <meta name="keywords" content="adjustable interest rate mortgage, amortization, application, appraisal, appraiser, appreciation, approved lender, assumption agreement, blended payment, builder, Canada Mortgage and Housing Corporation (CMHC), certificate of status, certificate of location, closed mortgage, closing costs, closing date, commitment letter, compound interest, conditional offer, condominium, contractor, conventional mortgage, counteroffer, credit bureau, credit history, curb appeal, deed, default, delinquency, deposit, depreciation, down payment, duplex, easement, emergency fund, equity, estoppel certificate, first-time home buyer incentive, fixed interest rate mortgage, FlexHousingTM, foreclosure, freehold, gross debt service (GDS) ratio, gross monthly income, high-ratio mortgage, home inspection, home inspector, home insurance premium, household budget, insurance broker, interest, interest rate, land registration, land surveyor, land transfer tax, lawyer, leasehold, lender, lien, lump sum prepayment, manufactured home, maturity date, mobile home, modular home, mortgage, mortgage broker, mortgage life insurance, mortgage loan insurance, mortgage loan insurance premium, mortgage payment, mortgage stress test, mortgage term, net worth, new home warranty program, notary, offer to purchase, ongoing costs, open house, open mortgage, payment schedule, PITH, power of sale, prepayment options, prepayment penalty, principal, property insurance, property taxes, real estate, real estate agent, REALTOR.ca, reserve fund, row house, security, semi-detached home, shared equity mortgage, single detached home, stacked townhouse, strata, survey, sustainable neighbourhood, title, title insurance, total debt service (TDS) ratio, townhouse, universal design, variable interest rate mortgage, vendor, vendor take-back mortgage" />
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
                    <Glossary />
                </VStack>
            </Box>
            <Footer />
        </>
    )
}

export default GlossaryPage;
