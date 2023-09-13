
import React from 'react';
import { VStack, Heading, Divider, Button  as ChakraButton } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpringButton from '../../theme/SpringButon';
import { Box, Image} from '@chakra-ui/react';
import MMlogo from '../../assets/1.png';
const MotionVStack = motion(VStack);


const BannerContent = () => {
  return (
    <MotionVStack textAlign="center" pt="20vh" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }} >
      <Box bgColor="#ffff" pb="2rem" pt="2rem" boxShadow="0 0 10px rgba(0,0,0,0.2)" >
      <Image src={MMlogo} w="60%" m="auto" pb="2rem">
      </Image>
     
      {/* <Divider w="5%" m="center" borderColor="custom.text" mt="30px" mb="30px" /> */}
      <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Contact</SpringButton>
      </Box>
    </MotionVStack>
  );
};

export default BannerContent;