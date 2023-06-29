import React  from 'react';
import { Box, Grid, Input, Text, Divider, Heading, VStack } from '@chakra-ui/react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import SpringButton from '../../theme/SpringButton';
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
  return (
    <VStack spacing={8} alignItems="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Send me a message</Heading>
        <Divider mt={5} mb={5} />
        <Input placeholder="Name" mb={3} />
        <Input placeholder="Subject" mb={3} />
        <Input placeholder="Email" mb={3} />
        <Input placeholder="Message" mb={3} />
        <SpringButton variant="outline">Submit</SpringButton>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Info</Heading>
        <Divider mt={5} mb={5} />
        {infoCards.map((card, index) => (
          <AnimateBox 
            p={5} 
            shadow="md" 
            borderWidth="1px" 
            style={hoverStyle} 
            onHoverStart={() => setHovered(true)} 
            onHoverEnd={() => setHovered(false)}
            onClick={() => window.alert(`Clicked ${card.title}`)}
            key={index}
          >
            <Grid templateColumns="max-content 1fr" gap={2} alignItems="center">
              <Box as={card.icon} w={8} h={8} color="blue.500" />
              <VStack spacing={1} align="start">
                <Text fontWeight="bold">{card.title}</Text>
                <Text>{card.content}</Text>
              </VStack>
            </Grid>
          </AnimateBox>
        ))}
      </Box>
    </VStack>
  );
};

export default Contact;