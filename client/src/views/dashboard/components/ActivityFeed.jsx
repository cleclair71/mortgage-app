import React from 'react';
import { Box, Flex, Text, useBreakpointValue, Icon, Heading } from '@chakra-ui/react';
import { MdCardGiftcard, MdNewReleases } from 'react-icons/md';

const ActivityFeed = () => {
    const activityData = [
        {
            id: 1,
            type: 'New Application',
            date: 'September 20, 2023',
            client: 'John Doe',
            icon: MdNewReleases
        },
        {
            id: 2,
            type: 'Client Birthday',
            date: 'September 21, 2023',
            client: 'Jane Smith',
            icon: MdCardGiftcard
        },
        // Add more activities as needed...
    ];

    return (
        <Box mx="1rem" shadow="md" borderWidth="1px" rounded="md" p={4}  mb="1rem" bgColor={'gray.100'} >
            <Heading fontSize="xl" mb={3}>Recent Activity</Heading>
            {activityData.map(activity => (
                <ActivityItem key={activity.id} {...activity} />
            ))}
        </Box>
    );
};

const ActivityItem = ({ type, date, client, icon }) => {
    const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });

    return (
        <Flex align="center" mb={3} p={2} bg="white" rounded="md" shadow="sm">
            <Box bg="green.300" p={3} rounded="md" mr={3}>
                <Icon as={icon} boxSize={6} />
            </Box>
            <Box flex="1">
                <Text fontSize={fontSize} fontWeight="bold">{type}</Text>
                <Text fontSize={fontSize}>{client}</Text>
                <Text fontSize={fontSize} color="gray.500">{date}</Text>
            </Box>
        </Flex>
    );
};

export default ActivityFeed;