import React from 'react';
import { Tab, TabList, Link } from "@chakra-ui/react";

const CalculatorTabList = ({ tabIndex }) => {
    return (
        <TabList bgColor="gray.200" borderRadius='md' mt="-4.5rem">
            <Tab as={Link} to="/calculators/affordability" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Affordability</Tab>
            <Tab as={Link} to="/calculators/payment" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Payment</Tab>
            <Tab as={Link} to="/calculators/cmhc" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>CMHC</Tab>
            <Tab as={Link} to="/calculators/transfer" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Land Transfer Tax</Tab>
            <Tab as={Link} to="/calculators/renewal" _selected={{ bg: "white", color: "black" }} _hover={{ color: "grey" }}>Renewal</Tab>
        </TabList>
    );
}

export default CalculatorTabList;