import React from 'react';
import { VStack, Heading, Divider, Button as ChakraButton } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const MotionVStack = motion(VStack);

const BannerContent = () => {
  return (
    <MotionVStack textAlign="center" pt="40vh" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
      <Heading as="h1" size="2xl" color="custom.text" textTransform="uppercase" fontSize="5vw" mt="-12rem" color="white">Mortgages</Heading>
      <Divider w="5%" borderColor="custom.text" mt="30px" mb="30px" />

    </MotionVStack>
  );
};

export default BannerContent;