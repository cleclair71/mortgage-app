
import React from 'react';
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
 
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SpringButton from '../../../theme/SpringButon';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const history = useHistory();
  return (
    <Box bg="transparent" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Box>LOGO</Box>
          </Link>
          <HStack
            as={'nav'}
            spacing={4}
            flexDirection={'row'}
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex', sm: 'none' }}>
            
            <NavItem title="Mortgages" routes={[
              {name: 'Home Purchase', route: '/Mortgages/home-purchase'},
              {name: 'Refinance', route: '/Mortgages/refinance'},
              {name: 'Renewal', route: '/Mortgages/renewing'},
              {name: 'Second Mortgage', route: '/Mortgages/second-mortgage'},
              {name: 'Commercial Mortgage', route: '/Mortgages/commercial-mortgage'},
              {name: 'Debt Consolidation', route: '/Mortgages/debt'},
              {name: 'Home Equity Mortgage', route: '/Mortgages/equity'},
                {name: 'Private Mortgage', route: '/Mortgages/private'},
              // Add all your routes
            ]}/>
           <NavItem title="Calculators" routes={[
  {name: 'Affordability Calculator', route: '/calculators/affordability'},
  {name: 'Payment Calculator', route: '/calculators/payment'},
  {name: 'CMHC Calculator', route: '/calculators/cmhc'},
  {name: 'Land Transfer Tax Calculator', route: '/calculators/transfer'},
  {name: 'Renewal Calculator', route: '/calculators/renewal'},
]}/>
            {/* <Link as={RouterLink} to="/rates" px={2} py={1} rounded={'md'}>Rates</Link> */}
            <NavItem title="About" routes={[
              {name: 'About Us', route: '/about-us'},
              {name: 'Contact Dora', route: '/contact-page'},
              // Add all your routes
            ]}/>
            <NavItem title="Resources" routes={[
              {name: 'FAQ', route: '/faq-page'},
              {name: 'Glossary', route: '/glossary-page'},
              // Add all your routes
            ]}/>
          </HStack>
        </HStack>
        <SpringButton as={RouterLink} to="/apply-page" variant='outline'  size={'sm'}>Apply Now</SpringButton>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
          <NavItem title="Mortgages" routes={[
              {name: 'Home Purchase', route: '/Mortgages/home-purchase'},
              {name: 'Refinance', route: '/Mortgages/refinance'},
              {name: 'Renewal', route: '/Mortgages/renewing'},
              {name: 'Second Mortgage', route: '/Mortgages/second-mortgage'},
              {name: 'Commercial Mortgage', route: '/Mortgages/commercial'},
              {name: 'Debt Consolidation', route: '/Mortgages/debt'},
              {name: 'Home Equity Mortgage', route: '/Mortgages/equity'},
                {name: 'Private Mortgage', route: '/Mortgages/private'},
              // Add all your routes
            ]}/>
           <NavItem title="Calculators" routes={[
  {name: 'Affordability Calculator', route: '/calculators/affordability'},
  {name: 'Payment Calculator', route: '/calculators/payment'},
  {name: 'CMHC Calculator', route: '/calculators/cmhc'},
  {name: 'Land Transfer Tax Calculator', route: '/calculators/transfer'},
  {name: 'Renewal Calculator', route: '/calculators/renewal'},
]}/>
            {/* <Link as={RouterLink} to="/rates" px={2} py={1} rounded={'md'}>Rates</Link> */}
            <NavItem title="About" routes={[
              {name: 'About Us', route: '/about-us'},
              {name: 'Contact Us', route: '/contact-us'},
              // Add all your routes
            ]}/>
            <NavItem title="Resources" routes={[
              {name: 'FAQ', route: '/faq-page'},
              {name: 'Glossary', route: '/glossary-page'},
              {name: 'Documents You Need', route: '/doc-page'},
            ]}/>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavItem = ({title, routes}) => {
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