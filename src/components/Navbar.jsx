import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Link as ChakraLink,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';

import ironhackLogoLight from '../assets/logo/ironhack/light.svg';
import ironhackLogoDark from '../assets/logo/ironhack/dark.svg';

function Navbar() {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      p="32px 80px"
      pos="fixed"
      w="100vw"
      zIndex="1"
    >
      <HStack spacing="48px">
        <ChakraLink as={ReactRouterLink} to="/">
          <Image src={ironhackLogoDark} h="32px" />
        </ChakraLink>
        {/* <Link to='/'>
        <button>How it works</button>
      </Link> */}
        <ChakraLink as={ReactRouterLink} to="">
          How it Works
        </ChakraLink>
      </HStack>
      <HStack spacing="24px">
        {/* <ChakraLink as={ReactRouterLink} to="">
          <Button variant="link" size="lg" borderRadius="32px">
            Register
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="">
          <Button variant="solid" size="lg" borderRadius="32px">
            Log In
          </Button>
        </ChakraLink> */}
        <ChakraLink as={ReactRouterLink} to="/2/projects">
          <Button variant="solid" size="lg" borderRadius="32px">
            Company
          </Button>
        </ChakraLink>
        {/* <ChakraLink as={ReactRouterLink} to="/501/projects">
          <Button variant="solid" size="lg" borderRadius="32px">
            Student
          </Button>
        </ChakraLink> */}
        <ChakraLink as={ReactRouterLink} to="/501/projects">
          <Button variant="solid" size="lg" borderRadius="32px">
            Student 1
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/502/projects">
          <Button variant="solid" size="lg" borderRadius="32px">
            Student 2
          </Button>
        </ChakraLink>
      </HStack>
    </Box>
  );
}

export default Navbar;
