import React, { useEffect } from 'react';
import { Box, Link } from "@chakra-ui/react";

const Affordability = () => {
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
      pt="3em"
    >
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        m="auto"
        w="100%"
        h="100%"
        data-widget="calc-affordability"
        data-province="ON"
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

export default Affordability;

// import React, { useEffect } from 'react';
// import { Box, Link, VStack, useDisclosure } from "@chakra-ui/react";
// import { Link as RouterLink } from 'react-router-dom';


// const AffordabilityCalculator = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     }
//   }, []);

//   return (
//     <Box
//       pb="3em"
//       w="80%"
//       mx="auto"
//       bgColor="white"
//       mt="-16em"
//       p="2em"
//       display={{ base: "block", md: "flex" }}
//       boxShadow="0 0 10px rgba(0,0,0,0.2)"
//     >
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         flex="2"
//       >
//         <Box
//           d="flex"
//           alignItems="center"
//           justifyContent="center"
//           flexDirection="column"
//           m="auto"
//           w="100%"
//           h="100%"
//           data-widget="calc-affordability"
//           data-province="ON"
//           data-lang="en"
//         />

//         <Link
//           d="inline-block"
//           w="80%"
//           mt=".5em"
//           textAlign="center"
//           alignItems="center"
//           href="https://www.ratehub.ca/"
//         >
//           <Box
//             as="img"
//             w="10%"
//             src="https://www.ratehub.ca/assets/images/widget-logo.png"
//             alt="Ratehub.ca logo"
//           />
//         </Link>
//       </Box>

//       <VStack
//         align="start"
//         justifyContent="top"
//         pl={{ base: "0", md: "2em" }}
//         p="1em"
//         borderLeft={{ base: "none", md: "1px solid" }}
//         borderColor="gray.200"
//         flex="1"
//       >
//         <RouterLink to="/affordability">Affordability Calculator</RouterLink>
//         <RouterLink to="/payment-calculator">Payment Calculator</RouterLink>
//         <RouterLink to="/cmhc-calculator">CMHC Calculator</RouterLink>
//         <RouterLink to="/land-transfer">Land Transfer Tax Calculator</RouterLink>
//         <RouterLink to="/renewal-calculator">Renewal Calculator</RouterLink>
//       </VStack>

     
//     </Box>
//   );
// };

// export default AffordabilityCalculator;