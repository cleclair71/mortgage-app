import React, { useState } from 'react';
import { Box, Input, Button, Text, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios'


const Newsletter = () => {
    const toast = useToast();


    // I'm not using any of these functions as I've used a third party for email newsletters
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const isValidForm = form.checkValidity();
  
        if (isValidForm) {

            try {
                const response = await axios.post("http://localhost:3001/api/auth/newsletter", formData)
                console.log(response)
              } catch (err) {
                console.error(err.message)
              }
           
            toast({
                title: "Subscribed",
                description: "You've been subscribed to our newsletter.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            // set form back to blank after submitting
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
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
                    <iframe
                        src="https://embeds.beehiiv.com/329b6cdf-adf5-4de2-84a1-4c556ec21cf0?slim=true"
                        data-test-id="beehiiv-embed"
                        height="52"
                        title="iframe"
                        frameBorder="0"
                        scrolling="no"
                        style={{
                          margin: 0,
                          borderRadius: '0px !important',
                          backgroundColor: 'transparent'
                        }}
                      />
                    {/* <Input type="text" id="firstName" bg="white" name="firstName" placeholder="First Name"  value={formData.firstName} onChange={handleInputChange} required />
                    <Input type="text" id="lastName" bg="white" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
                    <Input type="email" id="email" bg="white" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                    <Button type="submit">Sign Up</Button> */}
                </VStack>
            </Box>
        </Box>
    )
}

export default Newsletter;