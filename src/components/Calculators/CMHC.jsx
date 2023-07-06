import React, { useEffect } from 'react';
import { Box, Link, Heading } from "@chakra-ui/react";

const CMHCCalculator = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
    script.async = true;
  
    setTimeout(() => {
      document.body.appendChild(script);
    }, 1000);  // Adjust delay as needed
  
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      flex="2"
      pt="1em"
    >
            <Heading as="h2" size="lg" pb="2rem">CMHC Calculator</Heading>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        m="auto"
        w="100%"
        h="100%"
        data-widget="calc-payment"
        data-cmhc="only"
        data-lang="en"
      />

      <Link
        d="inline-block"
        w="80%"
        mt=".5em"
        textAlign="center"
        alignItems="center"
        href="https://www.ratehub.ca/"
      >
        <Box
          as="img"
          w="10%"
          src="https://www.ratehub.ca/assets/images/widget-logo.png"
          alt="Ratehub.ca logo"
        />
      </Link>
    </Box>
  );
};

export default CMHCCalculator;

