import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';

import Footer from '../components/Footer';

function HowItWorks() {
  return (
    <div className="HowItWorks">
      <Card mx="80px" variant="filled" backgroundColor="white">
        <CardHeader mb={6}>
          <Heading as="h2" textAlign="center">
            How We Transform Ideas into Real-World Solutions
          </Heading>
        </CardHeader>

        <CardBody className="howWorksAll">
          <Flex justifyContent="space-between" w="100%" px="80px">
            <Box className="howWorksLine" as="hr" />
            <Box className="stepBox">
              <Box className="howWorksNumbers" backgroundColor="#0009EA">
                <Heading size="lg">1</Heading>
              </Box>
              <VStack className="howWorksText" h="220px" spacing="16px">
                <Heading size="md">Get Started</Heading>

                <Text>
                  Sign up as a Company or Student to begin your journey. Join a
                  community dedicated to shaping the future of UX/UI design.
                </Text>
              </VStack>
            </Box>

            <Box className="stepBox">
              <Box className="howWorksNumbers" backgroundColor="#0C3CEF">
                <Heading size="lg">2</Heading>
              </Box>
              <VStack className="howWorksText" h="220px" spacing="16px">
                <Heading size="md">Submit Project</Heading>

                <Text>
                  Companies, share your design challenges. Students, explore and
                  apply for projects that catch your interest.
                </Text>
              </VStack>
            </Box>

            <Box className="stepBox">
              <Box className="howWorksNumbers" backgroundColor="#1767F2">
                <Heading size="lg">3</Heading>
              </Box>
              <VStack className="howWorksText" h="220px" spacing="16px">
                <Heading size="md">Pick Projects</Heading>

                <Text>
                  Students, choose projects you're excited about. Companies, see
                  which students are interested in solving your challenges.
                </Text>
              </VStack>
            </Box>

            <Box className="stepBox">
              <Box className="howWorksNumbers" backgroundColor="#2193F6">
                <Heading size="lg">4</Heading>
              </Box>
              <VStack className="howWorksText" h="220px" spacing="16px">
                <Heading size="md">Find a Match</Heading>

                <Text>
                  Discover when a student's skills match a project's needs. Our
                  system connects the right talent with the right challenge.
                </Text>
              </VStack>
            </Box>

            <Box className="stepBox">
              <Box className="howWorksNumbers" backgroundColor="#2CC5FA">
                <Heading size="lg">5</Heading>
              </Box>
              <VStack className="howWorksText" h="220px" spacing="16px">
                <Heading size="md">Start the Project</Heading>

                <Text>
                  Once there's a match, kick off the project. Companies and
                  students meet to discuss details and get started on an
                  exciting collaboration.
                </Text>
              </VStack>
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <Footer />
    </div>
  );
}

export default HowItWorks;
