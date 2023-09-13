import React from 'react';
import { Box, Link, VStack, Heading, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const resources = [
  {name: 'FAQ', route: '/faq-page'},
  {name: 'Glossary', route: '/glossary-page'},

];

const ResourceCard = () => {
    const [isLargerThan530] = useMediaQuery("(min-width: 530px)");
    return isLargerThan530 ? (
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
      {resources.map((res, index) => (
        <Box 
          key={index} 
          p={3} 
          bg="white" 
          width="100%" 
          borderRadius="md" 
          boxShadow="sm"
        >
          <Link as={RouterLink} to={res.route}>{res.name}</Link>
        </Box>
      ))}
    </VStack>
  </Box>
) : null;
};

export default ResourceCard;