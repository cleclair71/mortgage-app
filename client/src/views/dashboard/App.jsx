import React from 'react';
import { Box, Flex, Text, Button, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, List, ListItem, Divider, Progress, Heading, useBreakpointValue } from "@chakra-ui/react";
import DashboardLayout from './DashboardLayout';
import ActivityFeed from './components/ActivityFeed';
import ClientRenewals from './components/ClientRenewals';

export default function DashboardApp() {
  return (
    <>
    <Box >
      <Heading pb="1.5rem" px="1rem">Dashboard</Heading>
      <Flex justify="space-between" wrap="wrap" mb={4} px="1rem">
        {/* <StatBox title="Total Leads" value={150} /> */}
        <StatBox title="Applications in Progress" value={75} />
        <StatBox title="Applications Approved" value={50} />
        <StatBox title="Applications Declined" value={10} />
        <StatBox title="Close Ratio" value="66%" helpText="Increased by 10%" increase />
      </Flex>

    <ActivityFeed />
    <ClientRenewals />
      

   
    </Box>
    </>
  );
}

const StatBox = ({ title, value, helpText, increase }) => {
  const boxWidth = useBreakpointValue({ base: "100%", sm: "48%", md: "24%", lg: "20%" });

  return (
    <Stat px={4} py={3} shadow="md" borderWidth="1px" rounded="md" w={boxWidth} mb={4} bgColor={'white'}>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value}</StatNumber>
      {helpText && <StatHelpText>
        <StatArrow type={increase ? "increase" : "decrease"} />
        {helpText}
      </StatHelpText>}
    </Stat>
  );
};