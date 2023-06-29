import React from 'react';
import { VStack, Heading, Divider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpringButton from '../../theme/SpringButon';
const MotionVStack = motion(VStack);

const BannerContent = () => {
  return (
    <MotionVStack textAlign="center" pt="40vh" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
      <Heading as="h1" size="2xl" color="white" textTransform="uppercase" fontSize="5vw">Contact Dora</Heading>
      <Divider w="5%" borderColor="custom.text" mt="30px" mb="30px" />
      <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Apply Now</SpringButton>
    </MotionVStack>
  );
};

export default BannerContent;