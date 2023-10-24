import React from 'react';
import {
  Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, VStack, Link, IconButton, Input, InputGroup, InputLeftElement, Button, Avatar
} from '@chakra-ui/react';
import { FaPlus, FaSearch } from 'react-icons/fa';
// import { generate } from 'shortid';

const ManageClients = () => {
  // Sample clients data
  const clients = [
    { id: 1, name: 'John Doe', birthdate: 'January 1, 1990', contact: '(123) 456-7890', renewalDate: 'October 25, 2023', loanAmount: '$300,000' },
    { id: 2, name: 'Jane Smith', birthdate: 'February 5, 1992', contact: '(234) 567-8901', renewalDate: 'November 10, 2023', loanAmount: '$450,000' },
    { id: 3, name: 'Bob Johnson', birthdate: 'March 10, 1995', contact: '(345) 678-9012', renewalDate: 'December 15, 2023', loanAmount: '$200,000' },
    { id: 4, name: 'Mike Williams', birthdate: 'April 15, 1998', contact: '(456) 789-0123', renewalDate: 'January 20, 2024', loanAmount: '$350,000' },
    { id: 5, name: 'Sarah Davis', birthdate: 'May 20, 2000', contact: '(567) 890-1234', renewalDate: 'February 25, 2024', loanAmount: '$400,000' },
    { id: 6, name: 'Karen Miller', birthdate: 'June 25, 2002', contact: '(678) 901-2345', renewalDate: 'March 30, 2024', loanAmount: '$500,000' },
    { id: 7, name: 'Lisa Wilson', birthdate: 'July 30, 2004', contact: '(789) 012-3456', renewalDate: 'April 5, 2024', loanAmount: '$250,000' },
    { id: 8, name: 'Mark Taylor', birthdate: 'August 5, 2006', contact: '(890) 123-4567', renewalDate: 'May 10, 2024', loanAmount: '$300,000' },


  ];

  return (
    <Box>
      <Heading pb="1.5rem" px="1rem">Manage Clients</Heading>
      <Box w="100%" d="flex" justifyContent="space-between" alignItems="center" mb="2rem">
        <InputGroup size="md" maxW="300px" mr="1rem">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.500" />
          </InputLeftElement>
          <Input placeholder="Search clients..." borderRadius="full" shadow="md" bgColor="white" />
        </InputGroup>
        <IconButton shadow="md" aria-label="Add new client" size="md" borderRadius="full" color="white" icon={<FaPlus />} variant="solid" bgColor="gray.500" _hover={{ bgColor: "gray.400" }} />
      </Box>

      <VStack mx="1rem" my="2rem" align="start" spacing={4} borderWidth="1px" rounded="md" bgColor="gray.100" shadow="md" p={4}>

        <Table bgColor="white" variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="gray.400">Avatar</Th>
              <Th color="gray.400">Client Name</Th>
              <Th color="gray.400">Birthdate</Th>
              <Th color="gray.400">Contact</Th>
              <Th color="gray.400">Renewal Date</Th>
              <Th color="gray.400">Loan Amount</Th>
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
      <Box d="flex" justifyContent="center" mt="1rem">
        <Button size="sm" mr="1rem" >Previous Page</Button>
        <Button size="sm">Next Page</Button>
      </Box>
    </Box >
  );
};

const ClientRow = ({ id, name, birthdate, contact, renewalDate, loanAmount }) => {
  const colors = ["red.300", "orange.300", "yellow.300", "green.300", "blue.300", "cyan.300", "purple.300"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];


  return (
    <Tr>
      <Td>
        <Link to={`/client/${id}`}>
          <Avatar cursor="pointer" size="sm" bg={randomColor} color="white" name={name}></Avatar>
        </Link>
      </Td>
      <Td>{name}</Td>
      <Td>{birthdate}</Td>
      <Td>{contact}</Td>
      <Td>{renewalDate}</Td>
      <Td>{loanAmount}</Td>
    </Tr>
  );
};

export default ManageClients;