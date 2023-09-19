import React from 'react';
import Sidebar from '../../components/Partials/Sidebar';
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const isWideScreen = useBreakpointValue({ base: false, md: true });

    return (
        <Flex>
            <Sidebar isOpen={isWideScreen} />
            <Flex direction="column" p={5} flex="1" w={isWideScreen ? "80%" : "100%"}>
                <Outlet />  
            </Flex>
        </Flex>
    );
}






