import React from 'react';
import { Tab, TabList, Link } from "@chakra-ui/react";

const MortgageTabList = ({ tabIndex }) => {
    return (
        <TabList bgColor="gray.200" borderRadius='md' mt="-4.5rem">
            <Tab as={Link} to="/Mortgages/home-purchase" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Home Purchase</Tab>
            <Tab as={Link} to="/Mortgages/commercial" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Commercial</Tab>
            <Tab as={Link} to="/Mortgages/debt" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Debt</Tab>
            <Tab as={Link} to="/Mortgages/equity" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Equity</Tab>
            <Tab as={Link} to="/Mortgages/private" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Private Mortgages</Tab>
            <Tab as={Link} to="/Mortgages/refinance" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Refinance</Tab>
            <Tab as={Link} to="/Mortgages/second-mortgage" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Second Mortgage</Tab>
            <Tab as={Link} to="/Mortgages/renewing" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Renewals</Tab>
        </TabList>
    );
}

export default MortgageTabList;