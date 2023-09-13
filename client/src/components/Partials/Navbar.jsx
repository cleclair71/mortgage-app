// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [bar, setBar] = useState(false);
//     return (
//         <Nav bar={bar}>
//             <span><Link to="/mortgages">Mortgages</Link></span>
//             <span><Link to="/calculators">Calculators</Link></span>
//             <span><Link to="/rates">Rates</Link></span>
//             <span><Link to="/mortgages">About</Link></span>
//             <span><Link to="/mortgages">Apply Now</Link></span>
//             <div onClick={() => setBar(!bar)} className="bars">
//                 <div className="bar"></div>
//             </div>
//         </Nav>
//     )
// }

// export default Navbar;

// const Nav = styled.div`
// @media (max-width: 640px) {
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     backdrop-filter: blur(20px);
//     background: rgba(255,255,255,0.3);
//     inset: 0;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//     font-weight: 700;
//     height: ${props => props.bar ? "100vh" : 0};
//     z-index: 100;
//     overflow: hidden;
//     transition: height 400ms ease-in-out;
// }
// span {
//     margin-left: 1rem;
//     a {
//         color: #0000;
//         text-decoration: none;
        
//         font-size: 1.8rem;
//         position: relative;
//         font-weight: 300;
//         :before {
//             content: "";
//             position: absolute;
//             left: 0;
//             right: 0;
//             bottom: -2px;
//             height: 2px;
//             background-color: #0000;
//             transform: scaleX(0);
//             transform-origin: right;
//             transition: transform 400ms ease-in-out;
//             }
//             :hover:before {
//                 transform: scaleX(1);
//                 transform-origin: left;
//                 }
//                 :hover {
//                     opacity: 0.8;
//                     }
//                     }
//                     };`

import { Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";

const Links = ['Mortgages', 'Rates', 'About', 'Apply Now'];
const paths = ['/mortgages', '/rates', '/about', '/sign-in'];

const NavLink = ({ children, path }) => (
  <Link as={RouterLink} to={path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}>
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>Logo</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link, index) => (
              <NavLink key={link} path={paths[index]}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link, index) => (
              <NavLink key={link} path={paths[index]}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;