import React, { useState } from 'react';
import { VStack, Box, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text, Flex, Heading } from "@chakra-ui/react";
import glossaryData from './glossaryData';
import ResourceCard from '../ResourceCard';
import SpringButton from '../../../theme/SpringButon'; // import this from your actual file path

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredGlossary = glossaryData.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex direction={['column', 'row']} justify="space-between">
      <Box flex="3" p={4} minHeight="80vh">
        <Heading>Glossary</Heading>
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
                      {item.term}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>{item.definition}</Text>
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

export default Glossary;