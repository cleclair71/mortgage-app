// import React from 'react';
// import styled from 'styled-components';
// import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
// import AboutImage from '../../assets/pexels-melike-benli-10093329.jpg';
// import Button from '../Partials/Button';
// const About = () => {
//   return (
//     <Container>
//       <ImageWrapper>
//         <StyledImage />
//       </ImageWrapper>
//       <ContentWrapper>
//         <Title>
//           <h1>About Dora</h1>
//           <StyledLine />
//         </Title>
//         <Description>
//           Dora is a passionate and dedicated software developer...
//         </Description>
//         <Button onClick={() => console.log("Button 2 clicked!")}>Contact</Button>
//         <IconWrapper>
//           <TfiFacebook style={{marginRight: '10px'}} size={40} />
//           <TfiLinkedin size={40} />
//         </IconWrapper>
//       </ContentWrapper>
//     </Container>
//   );
// };

// export default About;

// const Container = styled.div`
//   display: flex;
  
//   justify-content: center;
//   align-items: center;
//   width: 100%;
  
//   margin: 0 auto;
//   padding: 1.5rem 0;
//   height: 100vh;
//         @media (max-width: 640px) {
//           height: 100%;
//         padding-bottom: 2rem;
// `;

// const ImageWrapper = styled.div`
//   width: 50%;
//   background: url(${AboutImage});
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     height: 100%;
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   height: auto;
  
// `;



// const ContentWrapper = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.div`
//   h1 {
//     font-size: 2.5rem;
//     color: var(--text);
//     text-decoration: none;
//     transition: all 400ms ease-in-out;
//     opacity: .6;
//     :hover {
//       opacity: 1;
//     }
//   }
// `;

// const StyledLine = styled.hr`
  
//   width: 15%;
//   border: 1px solid var(--text);
//     margin: 0 auto;
//     margin-top: 30px;
//     margin-bottom: 30px;
// `;

// const Description = styled.p`
//   font-size: 1.1rem;
//   color: var(--text);
//   opacity: 0.6;
//   transition: all 400ms ease-in-out;
//   margin-bottom: 2rem;
//   :hover {
//     opacity: 1;
//   }
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   color: var(--text);
//   margin-top: 1rem;
//   width: 60px;
// `;

import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text, useColorModeValue, Divider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import AboutImage from '../../assets/pexels-melike-benli-10093329.jpg';
import SpringButton from '../../theme/SpringButon';

const MotionBox = motion(Box);

const About = () => {

  const color = useColorModeValue('custom.text', 'custom.backgroundWhite');
  return (
   
    <MotionBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      margin="0 auto"
      padding="1.5rem 0"
      minHeight={["100%", "100vh"]}
      paddingBottom={["2rem", "0"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Flex
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={AboutImage}
          alt="About Dora"
          width="50%"
          objectFit="cover"
          display={{base: "none", md: "block"}}
        />
        <Box
          width={["100%", "50%"]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={["2rem", "0"]}
        >
          <Heading as="h1" size="2xl" mt="40px" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Next Steps</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
          <Text fontSize="1.1rem" color={useColorModeValue("custom.text", "white")} mb="2rem">
            Dora is a passionate and dedicated software developer...
          </Text>
          <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Contact</SpringButton>
          <HStack mt="1rem" width="60px">
            <TfiFacebook size={40} color={useColorModeValue("custom.text", "white")} />
            <TfiLinkedin size={40} color={useColorModeValue("custom.text", "white")} />
          </HStack>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default About;