import React, { useState } from 'react';
import { VStack, Box, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text, Flex, Heading } from "@chakra-ui/react";
import FaqData from './FaqData';
import ResourceCard from '../ResourceCard';
import SpringButon from '../../../theme/SpringButon'; // import this from your actual file path

const FAQ = () => {
  const [searchQuestion, setSearchQuestion] = useState('');

  const handleSearchChange = event => {
    setSearchQuestion(event.target.value);
  };

  const filteredGlossary = FaqData.filter(item =>
    item.question.toLowerCase().includes(searchQuestion.toLowerCase())
  );

  return (
    <Flex direction={['column', 'row']} justify="space-between">
      <Box flex="3" p={4} minHeight="80vh">
        <Heading>FAQ</Heading>
        <Input
          mt={4}
          mb={4}
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        {/* <SpringButton variant="outline">Submit</SpringButton> */}
        <Accordion mt={4} allowToggle>
          <VStack spacing={4} align="stretch">
            {filteredGlossary.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>{item.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </VStack>
        </Accordion>
      </Box>

      <Box flex="1" position="sticky" top="0" height="fit-content">
        <ResourceCard />
      </Box>
    </Flex>
  );
};

export default FAQ;