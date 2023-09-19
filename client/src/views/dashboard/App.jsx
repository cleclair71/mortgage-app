import React from 'react';
import { Box, Flex, Text, Button, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, List, ListItem, Divider, Progress, Heading } from "@chakra-ui/react";
import DashboardLayout from './DashboardLayout';

export default function DashboardApp() {
  return (
    <>
      <Heading>Dashboard</Heading>
      <Flex justify="space-between" wrap="wrap" mb={4}>
        <StatBox title="Total Leads" value={150} />
        <StatBox title="Applications in Progress" value={75} />
        <StatBox title="Applications Approved" value={50} />
        <StatBox title="Applications Declined" value={10} />
        <StatBox title="Close Ratio" value="66%" helpText="Increased by 10%" increase />
      </Flex>

      {/* Task & Alerts Section */}
      <Box mb={4}>
        <Text fontSize="xl" mb={2}>Upcoming Appointments</Text>
        <List>
          <ListItem>Meeting with John Doe at 2:00 PM</ListItem>
          <Divider />
          <ListItem>Call with Jane Smith at 3:30 PM</ListItem>
          <Divider />
          <ListItem>Team meeting at 4:00 PM</ListItem>
        </List>
      </Box>

      {/* More sections can be added in a similar manner... */}
      
    </>
  );
}

const StatBox = ({ title, value, helpText, increase }) => (
  <Stat px={4} py={3} shadow="md" borderWidth="1px" rounded="md" w="20%" mb={4}>
    <StatLabel>{title}</StatLabel>
    <StatNumber>{value}</StatNumber>
    {helpText && <StatHelpText>
      <StatArrow type={increase ? "increase" : "decrease"} />
      {helpText}
    </StatHelpText>}
  </Stat>
);