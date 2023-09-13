import React from "react";
import { Box, Heading, Divider, useColorModeValue, VStack } from "@chakra-ui/react";

const Location = () => {
  const color = useColorModeValue("custom.text", "custom.backgroundWhite");
  const bg = useColorModeValue('custom.backgroundLight');

  return (
    <VStack w="100vw" m="0 auto" p="1.5rem 0" mb="0" bgColor={bg} minHeight="80vh">
      <Box mt={10} maxW="100vw">
        <Heading textAlign="center" as="h1" size="2xl" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>
          Where we are located
        </Heading>
        <Divider margin="auto" w="15%" borderColor={color} mt="30px" mb="30px" />
        <Box width="100%" maxW="100vw" minWidth="80vw" overflowX="hidden" pb="10" borderRadius="9px" pt="8">
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
    </VStack>
  );
};

export default Location;