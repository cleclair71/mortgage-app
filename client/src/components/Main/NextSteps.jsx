

import React from 'react';
import { Box, VStack, Heading, Text, Divider, Button as ChakraButton, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import SpringButton from '../../theme/SpringButon';

const MotionBox = motion(Box);

const NextSteps = () => {
  const steps = [
    { title: 'Step 1', description: 'Description for step 1' },
    { title: 'Step 2', description: 'Description for step 2' },
    { title: 'Step 3', description: 'Description for step 3' },
    { title: 'Step 4', description: 'Description for step 4' },
  ];

  const bg = useColorModeValue('custom.header', 'custom.backgroundDark');
  const color = useColorModeValue('custom.text', 'custom.backgroundWhite');

  return (
    <VStack alignItems="center" w="100%" m="0 auto" p="1.5rem 0" bgColor="#bacac9" minHeight="80vh">
      <Heading as="h1" size="2xl" mt="40px" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Next Steps</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={10} w="100%" pl="1rem" pr="1rem">
        {steps.map((step, index) => (
          <MotionBox
            key={index}
            bgColor="custom.backgroundWhite"
            p="20px"
            m="20px"
            borderRadius="1px"
            minWidth="200px"
            boxShadow="0 0 10px rgba(0,0,0,0.2)"
            textAlign="center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Heading as="h3" size="lg" mb="10px">{step.title}</Heading>
            <Text mb="20px">{step.description}</Text>
            <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Go</SpringButton>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default NextSteps;