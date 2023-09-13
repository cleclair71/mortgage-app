import React from 'react';
import { VStack, Heading, Divider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import SpringButton from '../../../theme/SpringButon';
const MotionVStack = motion(VStack);

const BannerContent = () => {
 
  return (
    <MotionVStack textAlign="center" pt="40vh" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
      <Heading as="h1" size="2xl" color="white" textTransform="uppercase" fontSize="5vw" mt="-10rem">Glossary</Heading>
      <Divider w="5%" borderColor="custom.text" mt="30px" mb="30px" />
      <SpringButton as={RouterLink} to="/sign-in" variant='outline'  size={'sm'}>Apply Now</SpringButton>
    </MotionVStack>
  );
};

export default BannerContent;