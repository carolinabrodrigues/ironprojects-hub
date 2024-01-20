import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  Flex,
  Spacer,
  Image,
} from '@chakra-ui/react';

import errorImage from '../assets/dizzy.png';

function ErrorPage() {
  return (
    <div>
      <Box pt='120px' mx={10}>
        <Flex justify='center'>
          <Box h={500} w={700}>
            <Flex direction='column' gap={5} alignItems='center'>
              <Image
                boxSize='150px'
                objectFit='cover'
                src={errorImage}
                alt='lost image'
              />
              <Heading as='h1' size='4xl'>
                404
              </Heading>
              <Spacer />
              <Text>Looks like you are lost...</Text>
              <Spacer />
              <Link href='/'>
                <Button>Go Back Home</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default ErrorPage;
