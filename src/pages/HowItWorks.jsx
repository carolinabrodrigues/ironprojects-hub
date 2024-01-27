import { Box, Heading, Text, Flex, VStack } from '@chakra-ui/react';

function HowItWorks() {
  return (
    <div>
      <Box pt='120px' mx={10}>
        <Heading as='h2' my={17}>
          How We Transform Ideas into Real-World Solutions
        </Heading>

        <Box className='howWorksAll'>
          <Box className='howWorksLine'></Box>
          <Flex gap='180px'>
            <Box className='stepBox'>
              <Box className='howWorksNumbers'>
                <Heading size='lg'>1</Heading>
              </Box>
              <VStack className='howWorksText' h='220px' spacing='30px'>
                <Box>
                  <Heading size='md'>Get Started</Heading>
                </Box>
                <Box>
                  <Text>
                    Sign up as a Company or Student to begin your journey. Join
                    a community dedicated to shaping the future of UX/UI design.
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box className='stepBox'>
              <Box className='howWorksNumbers'>
                <Heading size='lg'>2</Heading>
              </Box>
              <VStack className='howWorksText' h='220px' spacing='30px'>
                <Box>
                  <Heading size='md'>Submit Project</Heading>
                </Box>
                <Box>
                  <Text>
                    Companies, share your design challenges. Students, explore
                    and apply for projects that catch your interest.
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box className='stepBox'>
              <Box className='howWorksNumbers'>
                <Heading size='lg'>3</Heading>
              </Box>
              <VStack className='howWorksText' h='220px' spacing='30px'>
                <Box>
                  <Heading size='md'>Pick Projects</Heading>
                </Box>
                <Box>
                  <Text>
                    Students, choose projects you're excited about. Companies,
                    see which students are interested in solving your
                    challenges.
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box className='stepBox'>
              <Box className='howWorksNumbers'>
                <Heading size='lg'>4</Heading>
              </Box>
              <VStack className='howWorksText' h='220px' spacing='30px'>
                <Box>
                  <Heading size='md'>Find a Match</Heading>
                </Box>
                <Box>
                  <Text>
                    Discover when a student's skills match a project's needs.
                    Our system connects the right talent with the right
                    challenge.
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box className='stepBox'>
              <Box className='howWorksNumbers'>
                <Heading size='lg'>5</Heading>
              </Box>
              <VStack className='howWorksText' h='220px' spacing='30px'>
                <Box>
                  <Heading size='md'>Start the Project</Heading>
                </Box>
                <Box>
                  <Text>
                    Once there's a match, kick off the project. Companies and
                    students meet to discuss details and get started on an
                    exciting collaboration.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default HowItWorks;
