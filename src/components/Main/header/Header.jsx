// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useHeader } from './HeaderHooks';
// import {
//     Container, Dropdown, DropdownLink, Logo, Nav,
//     NavItem, StyledChevron, StyledButton
// } from './HeaderStyles';

// const Header = () => {
//     const {
//         bar,
//         setBar,
//         activeDropdown,
//         setActiveDropdown,
//         handleMouseEnter,
//         handleMouseLeave,
//         timeoutId, // destructure timeoutId here
//     } = useHeader();


//     return (
//         <Container bar={bar}>
//             <Logo>
//                 <h1><Link to="/">LOGO</Link></h1>
//             </Logo>
//             <Nav bar={bar}>
//                 <NavItem onMouseEnter={() => handleMouseEnter('mortgages')}
//                     onMouseLeave={() => handleMouseLeave('mortgages')}>
//                     <Link to="/mortgages">Mortgages<StyledChevron /></Link>
//                     {activeDropdown === 'mortgages' && (
//                         <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
//                             <DropdownLink to="/home-purchase">Home Purchase</DropdownLink>
//                             <DropdownLink to="/refinance">Refinance</DropdownLink>
//                             <DropdownLink to="/renewal">Renewal</DropdownLink>
//                             <DropdownLink to="/second-mortgage">Second Mortgage</DropdownLink>
//                             <DropdownLink to="/commercial-mortgage">Commercial Mortgage</DropdownLink>
//                             <DropdownLink to="/debt-consolidation">Debt Consolidation</DropdownLink>
//                             <DropdownLink to="/home-equity-mortgage">Home Equity Mortgage</DropdownLink>
//                             <DropdownLink to="/private-mortgage">Private Mortgage</DropdownLink>
//                         </Dropdown>
//                     )}
//                 </NavItem>
//                 <NavItem onMouseEnter={() => handleMouseEnter('calculators')}
//                     onMouseLeave={() => handleMouseLeave('calculators')}>
//                     <Link to="/calculators">Calculators<StyledChevron /></Link>
//                     {activeDropdown === 'calculators' && (
//                         <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
//                             <DropdownLink to="/affordability">Affordability Calculator</DropdownLink>
//                             <DropdownLink to="/payment-calculator">Payment Calculator</DropdownLink>
//                             <DropdownLink to="/cmhc-calculator">CMHC Calculator</DropdownLink>
//                             <DropdownLink to="/land-transfer">Land Transfer Tax Calculator</DropdownLink>
//                             <DropdownLink to="/renewal-calculator">Renewal Calculator</DropdownLink>
//                         </Dropdown>
//                     )}
//                 </NavItem>
//                 <NavItem><Link to="/rates">Rates</Link></NavItem>
//                 <NavItem onMouseEnter={() => handleMouseEnter('about')}
//                     onMouseLeave={() => handleMouseLeave('about')}>
//                     <Link to="/about">About<StyledChevron /></Link>
//                     {activeDropdown === 'about' && (
//                         <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
//                             <DropdownLink to="/about-us">About Us</DropdownLink>
//                             <DropdownLink to="/contact-us">Contact Us</DropdownLink>
//                             <DropdownLink to="/mortgage-professionals">Mortgage Professionals</DropdownLink>
//                         </Dropdown>
//                     )}
//                 </NavItem>
//                 <NavItem onMouseEnter={() => handleMouseEnter('resources')}
//                     onMouseLeave={() => handleMouseLeave('resources')}>
//                     <Link to="/resources">Resources<StyledChevron /></Link>
//                     {activeDropdown === 'resources' && (
//                         <Dropdown onMouseEnter={() => clearTimeout(timeoutId.current)} onMouseLeave={() => setActiveDropdown(null)}>
//                             <DropdownLink to="/faq">FAQ</DropdownLink>
//                             <DropdownLink to="/glossary">Glossary</DropdownLink>
//                             <DropdownLink to="/why-use-us">Why use us?</DropdownLink>
//                         </Dropdown>
//                     )}
//                 </NavItem>
//                 <NavItem>
//                     <span>
//                         <StyledButton onClick={() => console.log("Button 2 clicked!")}>
//                             Apply now
//                         </StyledButton>
//                     </span>
//                 </NavItem>
//             </Nav>
//             <div onClick={() => setBar(!bar)} className="bars">
//                 <div className="bar"></div>
//             </div>
//         </Container>
//     )
// }

// export default Header;

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
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SpringButton from '../../../theme/SpringButon';

export default function Header() {
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
          <Box>LOGO</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex', sm: 'none' }}>
            flexDirection={'row'}>
            <NavItem title="Mortgages" routes={[
              {name: 'Home Purchase', route: '/home-purchase'},
              {name: 'Refinance', route: '/refinance'},
              {name: 'Renewal', route: '/renewal'},
              {name: 'Second Mortgage', route: '/second-mortgage'},
              {name: 'Commercial Mortgage', route: '/commercial-mortgage'},
              {name: 'Debt Consolidation', route: '/debt-consolidation'},
              {name: 'Home Equity Mortgage', route: '/home-equity-mortgage'},
                {name: 'Private Mortgage', route: '/private-mortgage'},
              // Add all your routes
            ]}/>
            <NavItem title="Calculators" routes={[
              {name: 'Affordability Calculator', route: '/affordability'},
              {name: 'Payment Calculator', route: '/payment-calculator'},
                {name: 'CMHC Calculator', route: '/cmhc-calculator'},
                {name: 'Land Transfer Tax Calculator', route: '/land-transfer'},
                {name: 'Renewal Calculator', route: '/renewal-calculator'},
              // Add all your routes
            ]}/>
            <Link as={RouterLink} to="/rates" px={2} py={1} rounded={'md'}>Rates</Link>
            <NavItem title="About" routes={[
              {name: 'About Us', route: '/about-us'},
              {name: 'Contact Dora', route: '/contact-page'},
              // Add all your routes
            ]}/>
            <NavItem title="Resources" routes={[
              {name: 'FAQ', route: '/faq'},
              {name: 'Glossary', route: '/glossary'},
              // Add all your routes
            ]}/>
          </HStack>
        </HStack>
        <SpringButton as={RouterLink} to="/applynow" variant='outline'  size={'sm'}>Apply Now</SpringButton>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
          <NavItem title="Mortgages" routes={[
              {name: 'Home Purchase', route: '/home-purchase'},
              {name: 'Refinance', route: '/refinance'},
              {name: 'Renewal', route: '/renewal'},
              {name: 'Second Mortgage', route: '/second-mortgage'},
              {name: 'Commercial Mortgage', route: '/commercial-mortgage'},
              {name: 'Debt Consolidation', route: '/debt-consolidation'},
              {name: 'Home Equity Mortgage', route: '/home-equity-mortgage'},
                {name: 'Private Mortgage', route: '/private-mortgage'},
              // Add all your routes
            ]}/>
            <NavItem title="Calculators" routes={[
              {name: 'Affordability Calculator', route: '/affordability'},
              {name: 'Payment Calculator', route: '/payment-calculator'},
                {name: 'CMHC Calculator', route: '/cmhc-calculator'},
                {name: 'Land Transfer Tax Calculator', route: '/land-transfer'},
                {name: 'Renewal Calculator', route: '/renewal-calculator'},
              // Add all your routes
            ]}/>
            <Link as={RouterLink} to="/rates" px={2} py={1} rounded={'md'}>Rates</Link>
            <NavItem title="About" routes={[
              {name: 'About Us', route: '/about-us'},
              {name: 'Contact Us', route: '/contact-us'},
              // Add all your routes
            ]}/>
            <NavItem title="Resources" routes={[
              {name: 'FAQ', route: '/faq'},
              {name: 'Glossary', route: '/glossary'},
              // Add all your routes
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