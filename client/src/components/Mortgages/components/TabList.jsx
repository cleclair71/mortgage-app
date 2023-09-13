import React from 'react';
import { Tab, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const MortgageTabList = () => {
    return (
        <Flex 
            as="nav"
            bg="gray.200" 
            mt="-4.5rem" 
            borderRadius="md" 
            wrap="wrap"
            p={3}
        >
            <Tab as={Link} to="/Mortgages/home-purchase" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Home Purchase</Tab>
            <Tab as={Link} to="/Mortgages/building" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Building/Construction</Tab>
            {/* <Tab as={Link} to="/Mortgages/commercial" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Commercial</Tab> */}
            {/* <Tab as={Link} to="/Mortgages/debt" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Debt</Tab> */}
            {/* <Tab as={Link} to="/Mortgages/equity" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Equity</Tab> */}
            {/* <Tab as={Link} to="/Mortgages/private" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Private Mortgages</Tab> */}
            <Tab as={Link} to="/Mortgages/refinance" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Refinance</Tab>
            
            <Tab as={Link} to="/Mortgages/renewing" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }} mx={1} py={2} px={3}>Renewals</Tab>
        </Flex>
    );
}

export default MortgageTabList;