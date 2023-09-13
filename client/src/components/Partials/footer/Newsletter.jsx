import React from 'react';
import { Box, Input, Button, Text, VStack, useToast } from '@chakra-ui/react';

const Newsletter = () => {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const isValidForm = form.checkValidity();

        if (isValidForm) {
            // here you can call your API to store the data
            toast({
                title: "Subscribed",
                description: "You've been subscribed to our newsletter.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
    }

    return (
        <Box
            flex="1"
            position="relative"
            maxHeight="90vh"
            margin="auto"
            minWidth="200px"
            overflowY="auto"
            // ml={[5, 2]}
            mt={[-2]}
            mr="3em"
           
            p={5}
            bg="gray.100"
            borderRadius="md"
            boxShadow="md"
            display="flex"
            // flexDirection={["column", "column", "row"]}
        >
            <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={2}>
                    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Newsletter</Text>
                    <Input type="text" id="firstName" bg="white" name="firstName" placeholder="First Name" required />
                    <Input type="text" id="lastName" bg="white" name="lastName" placeholder="Last Name" required />
                    <Input type="email" id="email" bg="white" name="email" placeholder="Email" required />
                    <Button type="submit">Sign Up</Button>
                </VStack>
            </Box>
        </Box>
    )
}

export default Newsletter;