// import React from "react";
// import { Box, Heading, Divider, useColorModeValue, VStack } from "@chakra-ui/react";

// const Location = () => {
//   const color = useColorModeValue("custom.text", "custom.backgroundWhite");
//   const bg = useColorModeValue('custom.backgroundLight');

//   return (
//     <VStack >
//       <Box mt={10} >
//         <Heading textAlign="center" as="h1" size="2xl" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>
//           Where we are located
//         </Heading>
//         <Divider margin="auto" w="15%" borderColor={color} mt="30px" mb="30px" />
//         <Box width="80%" maxW="100vw" minWidth="60vw" overflowX="hidden" pb="10" borderRadius="9px" pt="8">
//           <iframe 

//             title="Location Map"
//             width="100%" 
//             height="600px" 
//             style={{ border: 'none' }}
//             scrolling="no" 
//             src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=77%20Pine%20Street,%20Gananoque,%20ON%20K7G-2W3+(Main%20Mortgage)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           ></iframe>
//         </Box>
//       </Box>
//     </VStack>
//   );
// };

// export default Location;

'use client'
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { MdFax } from 'react-icons/md';




import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,

} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import SpringButton from '../../../theme/SpringButon';

export default function Location() {
  return (

    <Flex>
      <Box
        bg="
          none"
        color="white"
        borderRadius="lg"
        mt="0"
        m={{ sm: 2, md: 8, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}>
        <Box p={4}>
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            <WrapItem>
              <Box>
                <Heading color="#555742" >Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#555742">
                  Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#555742"
                      _hover={{ border: '2px solid #50703e' }}
                      leftIcon={<MdPhone color="#50703e" size="20px" />}>
                      +91-988888888
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#555742"
                      _hover={{ border: '2px solid #50703e' }}
                      leftIcon={<MdEmail color="#50703e" size="20px" />}>
                      hello@abc.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#555742"
                      _hover={{ border: '2px solid #50703e' }}
                      leftIcon={<MdLocationOn color="#50703e" size="20px" />}>
                      Karnavati, India
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start">
                  <IconButton
                    color="white"
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#50703e' }}
                    icon={<MdFacebook size="28px" />}
                  />
                  <IconButton
                    color="white"
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#50703e' }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    color="white"
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#50703e' }}
                    icon={<BsDiscord size="28px" />}
                  />
                </HStack>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="white" borderRadius="lg">
                <Box width="80%" maxW="100vw" minWidth="30vw" overflowX="hidden" borderRadius="9px" pt="8">
                  <iframe

                    title="Location Map"
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=77%20Pine%20Street,%20Gananoque,%20ON%20K7G-2W3+(Main%20Mortgage)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>

  )
}