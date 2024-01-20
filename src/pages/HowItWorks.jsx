import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';

function HowItWorks() {
  return (
    <div>
      <Box pt='120px' mx={10}>
        <Heading as='h2' my={17}>
          How We Transform Ideas into Real-World Solutions
        </Heading>
        <Flex>
          <Card>
            <CardHeader>
              <Heading size='xl'>1</Heading>
              <Heading size='md'>Get Started</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Sign up as a Company or Student to begin your journey. Join a
                community dedicated to shaping the future of UX/UI design.
              </Text>
            </CardBody>
          </Card>
          <Spacer />
          <Card>
            <CardHeader>
              <Heading size='xl'>2</Heading>
              <Heading size='md'>Submit your Project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Companies, share your design challenges. Students, explore and
                apply for projects that catch your interest.
              </Text>
            </CardBody>
          </Card>
          <Spacer />

          <Card>
            <CardHeader>
              <Heading size='xl'>3</Heading>
              <Heading size='md'>Pick your Project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Students, choose projects you're excited about. Companies, see
                which students are interested in solving your challenges.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='xl'>4</Heading>
              <Heading size='md'>Find a Match</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Discover when a student's skills match a project's needs. Our
                system connects the right talent with the right challenge.
              </Text>
            </CardBody>
          </Card>
          <Spacer />
          <Card>
            <CardHeader>
              <Heading size='xl'>5</Heading>
              <Heading size='md'>Start the Project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Once there's a match, kick off the project. Companies and
                students meet to discuss details and get started on an exciting
                collaboration.
              </Text>
            </CardBody>
          </Card>
        </Flex>

        <Button>Start Here</Button>
      </Box>
    </div>
  );
}

export default HowItWorks;
