// import React from 'react';
// import styled from 'styled-components';
// import Button from '../Partials/Button';

// const NextSteps = () => {
//   const steps = [
//     { title: 'Step 1', description: 'Description for step 1' },
//     { title: 'Step 2', description: 'Description for step 2' },
//     { title: 'Step 3', description: 'Description for step 3' },
//     { title: 'Step 4', description: 'Description for step 4' },
//   ];

//   return (
//     <Container>
//       <Title>
//         <h1>Next Steps</h1>
//         <BannerLine />
//       </Title>
//       <CardsContainer>
//         {steps.map((step, index) => (
//           <Card key={index}>
//             <h3>{step.title}</h3>
//             <p>{step.description}</p>
//             <Button onClick={() => console.log("Button 2 clicked!")}>Go</Button>
//           </Card>
//         ))}
//       </CardsContainer>
//     </Container>
//   );
// };

// export default NextSteps;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   margin: 0 auto;
//   padding: 1.5rem 0;
//   background-color: var(--beige);
//   height: 80vh;
// `;

// const Title = styled.div`
//   h1 {
//     margin-top: 40px;
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

// const BannerLine = styled.hr`
//   width: 15%;
//   border: 1px solid var(--text);
//   margin: 0 auto;
//   margin-top: 30px;
//     margin-bottom: 30px;
// `;

// const CardsContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   width: 100%;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: var(--white);
//   padding: 20px;
//   margin: 20px;
//   border-radius: 1px;
//   width: 20%;
//   min-width: 200px;
//   box-shadow: 0 0 10px rgba(0,0,0,0.2);
//   h3 {
//     margin-bottom: 10px;
//   }
//   p {
//     margin-bottom: 20px;
//   }
// `;

// const StyledButton = styled.button`
//   font-size: 1.5rem;
//   padding: 10px 20px;
//   background-color: black;
//   color: var(--white);
//   border: none;
//   cursor: pointer;
//   transition: all 400ms ease-in-out;
//   :hover {
//     background-color: grey;
//   }
// `;

import React from 'react';
import { Box, VStack, Heading, Text, Divider, Button as ChakraButton, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import SpringButton from '../../theme/SpringButon';

const MotionBox = motion(Box);

const NextSteps = () => {
  const steps = [
    { title: 'Step 1', description: 'Description for step 1' },
    { title: 'Step 2', description: 'Description for step 2' },
    { title: 'Step 3', description: 'Description for step 3' },
    { title: 'Step 4', description: 'Description for step 4' },
  ];

  const bg = useColorModeValue('custom.header', 'custom.backgroundDark');
  const color = useColorModeValue('custom.text', 'custom.backgroundWhite');

  return (
    <VStack alignItems="center" w="100%" m="0 auto" p="1.5rem 0" bgColor={bg} minHeight="80vh">
      <Heading as="h1" size="2xl" mt="40px" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Next Steps</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={10} w="100%">
        {steps.map((step, index) => (
          <MotionBox
            key={index}
            bgColor="custom.backgroundWhite"
            p="20px"
            m="20px"
            borderRadius="1px"
            minWidth="200px"
            boxShadow="0 0 10px rgba(0,0,0,0.2)"
            textAlign="center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Heading as="h3" size="lg" mb="10px">{step.title}</Heading>
            <Text mb="20px">{step.description}</Text>
            <SpringButton variant="outline" onClick={() => console.log("Button 2 clicked!")}>Go</SpringButton>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default NextSteps;