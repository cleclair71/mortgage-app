

import React from 'react';
import { VStack, Box, Heading, Divider, Text, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import SpringButton from '../../theme/SpringButon'; // import this from your actual file path

const Apply = () => {
    const color = useColorModeValue("custom.text", "custom.Text");
  return (
    <Box p={4}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl" mt="40px" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>
        Let's get you started on your application
        </Heading>
        <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
        <Text fontSize="xl" fontWeight="bold">
          Let's get you started on your application
        </Text>
        <Text>
          At Our company, it is our goal to provide you, our client, with the quickest, easiest, and most hassle free way of getting a low rate Canada mortgage loan, 24/7.
          To that end, we have developed five simple steps to make the mortgage application process easier.
        </Text>
        <ol>
          <li>Complete the secure, no cost, online mortgage application.</li>
          <li>Click submit, and if you requested the instant mortgage approval option (restrictions apply), you'll get an answer in seconds.</li>
          <li>Within 24 hours, Dora will be in contact with you to discuss various mortgage options including mortgage rates and terms.</li>
          <li>You review and sign the necessary documentation with a legal professional conveniently located in your area.</li>
          <li>Your mortgage is funded.</li>
        </ol>
        <SpringButton variant="outline">
          <Link href="https://www.secure-application.net/apply/?hid=d36550fc4422fde2c3bb4169c939e24e583e79f0" isExternal>
            Apply Now
          </Link>
        </SpringButton>
        <Text fontSize="sm">Clicking "Apply online" will transfer you to our secure server.</Text>
        <Text>If you prefer, you can print our mortgage application to fax or email it to our toll free fax number provided on the application. (Note: Faxed applications do not qualify for instant mortgage or pre approvals.)</Text>
        <SpringButton variant="outline">Download Application</SpringButton>
      </VStack>

      <Box 
        flex="1" 
        position="sticky" 
        top="0" 
        maxHeight="90vh" 
        minWidth="200px"
        overflowY="auto"
        ml={[5, 2]} 
        mt={[10, 5]} 
        p={5}
        bg="gray.100"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading size="md" mb={3}>Resources</Heading>
        <VStack align="start" spacing={2}>
          <Box 
            p={3} 
            bg="white" 
            width="100%" 
            borderRadius="md" 
            boxShadow="sm"
          >
            <Link as={RouterLink} to="/glossary-page">Glossary</Link>
          </Box>
          <Box 
            p={3} 
            bg="white" 
            width="100%" 
            borderRadius="md" 
            boxShadow="sm"
          >
            <Link as={RouterLink} to="/faq-page">Frequently Asked Questions</Link>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Apply;