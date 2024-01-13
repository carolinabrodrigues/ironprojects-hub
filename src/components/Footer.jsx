import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Link as ChakraLink,
  Image,
  Button,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

import ironhackLogoLight from '../assets/logo/ironhack/light.svg';
import ironhackLogoDark from '../assets/logo/ironhack/dark.svg';

function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      flexDir="column"
      p="32px 80px"
      w="100vw"
      mt={12}
    >
      <ChakraLink as={ReactRouterLink} to="/">
        <Image src={ironhackLogoDark} h="32px" />
      </ChakraLink>
      {/* <SimpleGrid columns={2} spacing="32px" mt={16} w="100%"> */}
      <HStack alignItems="top" mt={16} justifyContent="space-between">
        <VStack spacing="32px" align="stretch" w="250px">
          {/* <Link to='/'>
          <button>How it works</button>
        </Link> */}
          <ChakraLink
            as={ReactRouterLink}
            to=""
            display="flex"
            justifyContent="space-between"
          >
            How it Works
            <ChevronRightIcon boxSize="24px" />
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to=""
            display="flex"
            justifyContent="space-between"
          >
            Contact Us
            <ChevronRightIcon boxSize="24px" />
          </ChakraLink>
        </VStack>
        <VStack spacing="24px" align="end">
          {/* <HStack>
              <ChakraLink as={ReactRouterLink} to="">
                <Button variant="link" size="lg" borderRadius="32px">
                  Register
                </Button>
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="">
                <Button variant="solid" size="lg" borderRadius="32px">
                  Log In
                </Button>
              </ChakraLink>
            </HStack> */}
          <ChakraLink as={ReactRouterLink} to="/2/projects">
            <Button variant="solid" size="lg" borderRadius="32px">
              Company
            </Button>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/501/projects">
            <Button variant="solid" size="lg" borderRadius="32px">
              Student
            </Button>
          </ChakraLink>
        </VStack>
      </HStack>
      {/* </SimpleGrid> */}

      <Text align="center" mt={12}>
        © 2024{' '}
        <ChakraLink href="https://github.com/carolinabrods">
          Carolina Rodrigues
        </ChakraLink>{' '}
        &&{' '}
        <ChakraLink href="https://github.com/ritadomar">
          Rita Martins
        </ChakraLink>
      </Text>
    </Box>
  );
}

export default Footer;