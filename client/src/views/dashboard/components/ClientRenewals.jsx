import React from 'react';
import {
    Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, VStack, Link, IconButton
} from '@chakra-ui/react';

const ClientRenewals = () => {
    const clients = [
        {
            id: 1,
            name: 'John Doe',
            renewalDate: 'October 25, 2023',
            loanAmount: '$300,000',
            contact: '(123) 456-7890'
        },
        {
            id: 2,
            name: 'Jane Smith',
            renewalDate: 'November 10, 2023',
            loanAmount: '$450,000',
            contact: '(234) 567-8901'
        },

    ];

    
    return (
        <VStack mx="1rem" my="2rem" align="start" spacing={4} borderWidth="1px" rounded="md" bgColor="gray.100" shadow="md" p={4}  overflowY="auto" maxH="400px">
            <Heading  size="md" pb=".5rem">Upcoming Renewals</Heading>
            <Table bgColor="white" variant="simple" size="md" >
                <Thead width="100%">
                    <Tr>
                        <Th color="gray.400" >Client Name</Th>
                        <Th color="gray.400">Renewal Date</Th>
                        <Th color="gray.400">Loan Amount</Th>
                        <Th color="gray.400">Contact</Th>
                        <Th color="gray.400">View</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {clients.map(client => (
                        <ClientRow key={client.id} {...client} />
                    ))}
                </Tbody>
            </Table>
        </VStack>
    );
};

const ClientRow = ({ name, renewalDate, loanAmount, contact }) => {
    const id = Math.floor(Math.random() * 1000000000);  
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{renewalDate}</Td>
            <Td>{loanAmount}</Td>
            <Td>{contact}</Td>
            <Td>
                <Link to={`/user/${id}`}>
                    <IconButton
                        aria-label="View user"
                        size="md"
                        icon={<Text>...</Text>}
                        variant="ghost"
                        colorScheme="gray"
                        _hover={{ color: "blue.500", borderColor: "blue.500" }}
                    />
                </Link>
            </Td>
        </Tr>
    );
};

export default ClientRenewals;