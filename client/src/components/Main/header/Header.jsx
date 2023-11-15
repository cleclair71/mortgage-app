
import React, { useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useToast
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import SpringButton from '../../../theme/SpringButon';
import LogoImage from '../../../assets/1.png';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

export default function Header() {
  const toast = useToast();
  const { user, setUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  
  const signout = async() => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND}/api/auth/logout`, {}, {withCredentials: true, credentials: 'include'})
      toast({
        title: "Signed out successfully.",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
    });
    setUser(null);
    navigate('/');
    } catch (err) {
      console.error(err.response.data)
      
    };
  }

  useEffect(() => {
    
    console.log('User state:', user);

  }, [user]);

  return (
    <Box bg="transparent" px={8}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          mt="1.5rem"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link as={RouterLink} to="/" _hover={{ boxShadow: "5px" }}>
            <Image h='100px' pt="2em"
              objectFit='cover' src={LogoImage} alt="Logo" /> {/* Use the Image component here */}
          </Link>
          <HStack
            as={'nav'}
            mt="1.5rem"
            spacing={4}
            flexDirection={'row'}
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex', sm: 'none' }}>

            <NavItem title="Mortgages" routes={[
              { name: 'Home Purchase', route: '/Mortgages/home-purchase' },
              { name: 'Refinance', route: '/Mortgages/refinance' },
              { name: 'Renewal', route: '/Mortgages/renewing' },
              { name: 'Building/Construction', route: '/Mortgages/building' },

            ]} />


            <NavItem title="About" routes={[
              { name: 'About Us', route: '/about-page' },
              { name: 'Contact Dora', route: '/contact-page' },
              // Add all your routes
            ]} />
            <NavItem title="Resources" routes={[
              { name: 'FAQ', route: '/faq-page' },
              { name: 'Glossary', route: '/glossary-page' },
              { name: 'Documents You Need', route: '/doc-page' }
              // Add all your routes
            ]} />
          </HStack>
        </HStack>
        {user ? <SpringButton onClick={signout} variant='outline' size={'sm'} mt="1.5rem">Sign Out</SpringButton> : null}
        
        <SpringButton as={RouterLink} to="/sign-in" variant='outline' size={'sm'} mt="1.5rem">Apply Now</SpringButton>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavItem title="Mortgages" routes={[
              { name: 'Home Purchase', route: '/Mortgages/home-purchase' },
              { name: 'Refinance', route: '/Mortgages/refinance' },
              { name: 'Renewal', route: '/Mortgages/renewing' },
              { name: 'Building/Construction', route: '/Mortgages/building' },

            ]} />


            <NavItem title="About" routes={[
              { name: 'About Us', route: '/about-page' },
              { name: 'Contact Us', route: '/contact-page' },
              // Add all your routes
            ]} />
            <NavItem title="Resources" routes={[
              { name: 'FAQ', route: '/faq-page' },
              { name: 'Glossary', route: '/glossary-page' },
              { name: 'Documents You Need', route: '/doc-page' }

            ]} />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavItem = ({ title, routes }) => {
  const bg = useColorModeValue('gray.200', 'gray.700');
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Link}
            px={2}
            py={1}
            rounded={'md'}
            transition={'all .3s ease'}
            _expanded={{ bg }}
            _hover={{ bg }}>
            {title} <ChevronDownIcon ml={2} />
          </MenuButton>
          <MenuList>
            {routes.map((item, idx) => (
              <MenuItem as={RouterLink} to={item.route} key={idx}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}