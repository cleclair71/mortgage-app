import {
    Box, VStack, LinkBox, LinkOverlay, Divider, Spacer, useBreakpointValue, Text, Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
    AiFillDashboard, AiOutlineUser, AiFillSetting, AiOutlineLogout
} from 'react-icons/ai';

import { MdHandshake, MdOutlineEmail } from "react-icons/md";

export default function Sidebar() {
    const isWideScreen = useBreakpointValue({ base: false, md: true });

    const SidebarContent = () => (
        <VStack
            align="start"
            spacing={4}
            p={isWideScreen ? 9 : 4}
            bg="gray.800"
            color="white"
            h="100vh"
            w={isWideScreen ? "16%" : "12%"}
            position="fixed"
            top={0}
            left={0}
        >
            {isWideScreen && 
                <Text fontSize="2xl" fontWeight="bold">
                    Agent Portal
                </Text>
            }
            {isWideScreen && <Divider w="100%" />}
            
            <LinkBox as="div" w="100%" py={2} _hover={{ bg: 'gray.700' }}>
                <LinkOverlay as={Link} to="/dashboard">
                    <Flex align="center" gap="1rem">
                        <AiFillDashboard size="24" />
                        {isWideScreen ? "Dashboard" : null}
                    </Flex>
                </LinkOverlay>
            </LinkBox>
            
            <LinkBox as="div" w="100%" py={2} _hover={{ bg: 'gray.700' }}>
                <LinkOverlay as={Link} to="/dashboard/manage-clients">
                    <Flex align="center" gap="1rem">
                        <AiOutlineUser size="24" />
                        {isWideScreen ? "Manage Clients" : null}
                    </Flex>
                </LinkOverlay>
            </LinkBox>
            
            <LinkBox as="div" w="100%" py={2} _hover={{ bg: 'gray.700' }}>
                <LinkOverlay as={Link} to="/dashboard/referral-partners">
                    <Flex align="center" gap="1rem">
                        <MdHandshake size="24" />
                        {isWideScreen ? "Referral Partners" : null}
                    </Flex>
                </LinkOverlay>
            </LinkBox>
            
            <LinkBox as="div" w="100%" py={2} _hover={{ bg: 'gray.700' }}>
                <LinkOverlay as={Link} to="/dashboard/communication">
                    <Flex align="center" gap="1rem">
                        <MdOutlineEmail size="24" />
                        {isWideScreen ? "Communication" : null}
                    </Flex>
                </LinkOverlay>
            </LinkBox>
            
            <Spacer />
    
            {isWideScreen && <Divider />}
    
            <LinkBox as="div" w="100%" py={2}>
                <LinkOverlay as={Link} to="/settings">
                    <Flex align="center" gap="1rem">
                        <AiFillSetting size="24" />
                        {isWideScreen ? "Settings" : null}
                    </Flex>
                </LinkOverlay>
            </LinkBox>
            
            <LinkBox as="div" w="100%" py={2}>
                <LinkOverlay as={Link} to="/signout">
                    <Flex align="center" gap="1rem">
                        <AiOutlineLogout size="24" />
                        {isWideScreen ? "Sign Out" : null}
                    </Flex>
                </LinkOverlay>
            </LinkBox>
        </VStack>
    );

    return <SidebarContent />;
};
