import React from 'react';
import { VStack, Heading, Divider } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);

const BannerContent = () => {
  return (
    <MotionVStack textAlign="center" pt="40vh" initial={{ y: 20, x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
      <Heading as="h1" size="2xl" color="white" textTransform="uppercase" fontSize="5vw">Mortgage Application</Heading>
      <Divider w="5%" borderColor="custom.text" mt="30px" mb="30px" />
      
    </MotionVStack>
  );
};

export default BannerContent;