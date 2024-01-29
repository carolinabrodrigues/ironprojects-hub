import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Link as ChakraLink,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import ironhackLogoLight from '../assets/logo/ironhack/light.svg';
import ironhackLogoDark from '../assets/logo/ironhack/dark.svg';

function Navbar({ location }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    defineTheme();
  }, [location]);

  const defineTheme = () => {
    if (location.pathname.includes('how-it-works')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      p="32px 80px"
      pos="absolute"
      w="100vw"
      zIndex="1"
      className={`NavBar ${theme}`}
    >
      <HStack spacing="48px">
        <ChakraLink as={ReactRouterLink} to="/">
          {theme === 'dark' ? (
            <Image src={ironhackLogoDark} h="32px" alt="IronProjects Logo" />
          ) : (
            <Image src={ironhackLogoLight} h="32px" alt="IronProjects Logo" />
          )}
        </ChakraLink>
        {/* <Link to='/'>
        <button>How it works</button>
      </Link> */}
        <ChakraLink as={ReactRouterLink} to="/how-it-works">
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
          <Button variant="outline" size="lg" borderRadius="32px">
            Log In
          </Button>
        </ChakraLink> */}
        <ChakraLink as={ReactRouterLink} to="/2/projects">
          <Button
            variant="outline"
            size="lg"
            borderRadius="32px"
            className="OutlineButton"
          >
            Company
          </Button>
        </ChakraLink>
        {/* <ChakraLink as={ReactRouterLink} to="/501/projects">
          <Button variant="outline" size="lg" borderRadius="32px">
            Student
          </Button>
        </ChakraLink> */}
        <ChakraLink as={ReactRouterLink} to="/501/projects">
          <Button
            variant="outline"
            size="lg"
            borderRadius="32px"
            className="OutlineButton"
          >
            Student
          </Button>
        </ChakraLink>
      </HStack>
    </Box>
  );
}

export default Navbar;
