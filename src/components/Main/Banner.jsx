// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Slide } from 'react-awesome-reveal';
// import Button from '../Partials/Button';

// const BannerContent = () => {
//   return (
//     <BannerWrapper>
//         <Slide direction="left">
//       <BannerTitle>Title</BannerTitle>
//       <BannerSubTitle>SubTitle</BannerSubTitle>
//       <BannerLine />
//       <Button onClick={() => console.log("Button 2 clicked!")}>Contact</Button>
//       </Slide>
      
//     </BannerWrapper>
//   );
// };

// export default BannerContent;

// const BannerWrapper = styled.div`
//   text-align: center;
//   padding-top: 40vh; 
// `;

// const BannerTitle = styled.h1`
//   color: var(--text);
//   text-transform: uppercase;
//     font-size: 5vw;
// `;

// const BannerSubTitle = styled.h2`
//   color: var(--text);
//   font-size: 2vw;
// `;

// const BannerLine = styled.hr`
//   width: 5%;
//   border: 1px solid var(--text);
//   margin: 0 auto;
//   margin-top: 30px;
// `;
import React from 'react';
import { VStack, Heading, Divider, Button as ChakraButton } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpringButton from '../../theme/SpringButon';
const MotionVStack = motion(VStack);

const BannerContent = () => {
  return (
    <MotionVStack textAlign="center" pt="40vh" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }}>
      <Heading as="h1" size="2xl" color="custom.text" textTransform="uppercase" fontSize="5vw">Title</Heading>
      <Heading as="h2" size="lg" color="custom.text" fontSize="2vw">SubTitle</Heading>
      <Divider w="5%" borderColor="custom.text" mt="30px" mb="30px" />
      <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Contact</SpringButton>
    </MotionVStack>
  );
};

export default BannerContent;