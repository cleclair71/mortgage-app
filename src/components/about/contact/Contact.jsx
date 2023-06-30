import React  from 'react';
import { Box, Grid, Input, Text, Divider, Heading, VStack, Stack, useColorModeValue } from '@chakra-ui/react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import SpringButton from '../../../theme/SpringButon';
import { useSpring, animated } from 'react-spring';

const AnimateBox = animated(Box);

const Contact = () => {
  const hoverStyle = useSpring({
    scale: 1.05,
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)"
  });

  const infoCards = [
    { title: 'Address', icon: FiMapPin, content: '123 Street, City, State, ZIP' },
    { title: 'Phone', icon: FiPhone, content: '+1 (123) 456-7890' },
    { title: 'Email', icon: FiMail, content: 'email@example.com' }
  ];

  const [hovered, setHovered] = React.useState(false);
  const color = useColorModeValue("custom.text", "custom.backgroundWhite");
  const accentGreen = useColorModeValue("custom.accentGreen");
  return (
    <Stack direction={["column", "row"]} spacing={18} pt="6" pb="9" >
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="8px">
      <Heading as="h1" size="md" fontSize="2.2rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Send me a Message</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
        <Input placeholder="Name" mb={3} />
        <Input placeholder="Subject" mb={3} />
        <Input placeholder="Email" mb={3} />
        <Input placeholder="Message" mb={3} />
        <SpringButton variant="outline">Submit</SpringButton>
      </Box>
      
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="8px">
      <Heading as="h1" size="2xl" fontSize="2.2rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Info</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
        
        {infoCards.map((card, index) => (
          <AnimateBox 
            p={5} 
            shadow="md" 
            borderWidth="1px" 
            borderRadius="8px"
           mb={3}
            style={hoverStyle} 
            onHoverStart={() => setHovered(true)} 
            onHoverEnd={() => setHovered(false)}
            onClick={() => window.alert(`Clicked ${card.title}`)}
            key={index}
          >
            <Grid templateColumns="max-content 1fr" gap={4} alignItems="center" >
              <Box as={card.icon} w={8} h={8} color="green.700" />
              <VStack spacing={1} align="start">
                <Text fontWeight="bold">{card.title}</Text>
                <Text>{card.content}</Text>
              </VStack>
            </Grid>
          </AnimateBox>
        ))}
      </Box>
    </Stack>
  );
};

export default Contact;