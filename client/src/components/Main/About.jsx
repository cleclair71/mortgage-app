

import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text, useColorModeValue, Divider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import AboutImage from '../../assets/homeF.jpg';
import SpringButton from '../../theme/SpringButon';

const MotionBox = motion(Box);

const About = () => {

  const color = useColorModeValue('custom.text', 'custom.backgroundWhite');
  return (
   
    <MotionBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      margin="0 auto"
      padding="1.5rem 0"
      minHeight={["100%", "100vh"]}
      paddingBottom={["2rem", "0"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Flex
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={AboutImage}
          alt="About Dora"
          width="50%"
          objectFit="cover"
          height="90vh"
          display={{base: "none", md: "block"}}
        />
        <Box
          width={["100%", "50%"]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={["2rem", "0"]}
        >
          <Heading as="h1" size="2xl" mt="40px" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Next Steps</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
          <Text fontSize="1.1rem" color={useColorModeValue("custom.text", "white")} mb="2rem">
            Dora is a passionate and dedicated software developer...
          </Text>
          <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Contact</SpringButton>
          <HStack mt="1rem" width="60px">
            <TfiFacebook size={40} color={useColorModeValue("custom.text", "white")} />
            <TfiLinkedin size={40} color={useColorModeValue("custom.text", "white")} />
          </HStack>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default About;