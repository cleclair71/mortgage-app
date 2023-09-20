import React from 'react';
import Sidebar from '../../components/Partials/Sidebar';
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const isWideScreen = useBreakpointValue({ base: false, md: true });

    return (
        <Flex w="100%" h="100vh">
            <Box as="aside" minW={isWideScreen ? "16%" : "12%"} bgColor="gray.800">
                <Sidebar isOpen={isWideScreen} />
            </Box>
            <Flex bgColor={'gray.200'} direction="column" p={5} flex="1" overflowY="auto">
                <Outlet />  
            </Flex>
        </Flex>
    );
}