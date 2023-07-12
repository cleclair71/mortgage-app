import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import Newsletter from './Newsletter';
// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({children, label, href}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box pt={5}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Main Mortgage</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Why Choose a Mortgage Agent</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link href={'#'}>FAQ</Link>
            <Link href={'#'}>Glossary</Link>
            <Link href={'#'}>Documents You Need</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
  <Newsletter />
</Stack>
        </SimpleGrid>
      </Container>

      <Box
    borderTopWidth={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.700')}>
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ md: 'space-between' }}
      align={{ md: 'center' }}>
      <Text fontSize="11">© 2023 <b>VERICO The Mortgage Professionals</b> License 10280 All Rights Reserved.
*some restrictions may apply
</Text>
<Text fontSize="11">
Powered by <a href="https://www.gomaxsolutions.com/" style={{fontWeight: 'bold'}}>GoMAX Solutions</a>.
</Text>
<Text fontSize="11">
Website by <a href="https://www.linkedin.com/in/cassie-leclair-931093b6/" style={{fontWeight: 'bold'}}>Cassie LeClair</a>
</Text>
      <Stack direction={'row'} spacing={6}>
        <SocialButton label={'Twitter'} href={'#'}>
          <FaFacebook />
        </SocialButton>
        {/* <SocialButton label={'YouTube'} href={'#'}>
          <FaYoutube />
        </SocialButton> */}
        <SocialButton label={'Instagram'} href={'#'}>
          <FaInstagram />
        </SocialButton>
      </Stack>
    </Container>
  </Box>
    </Box>
  );
}