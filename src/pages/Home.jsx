import {
  Container,
  Heading,
  VisuallyHidden,
  Text,
  Box,
  SimpleGrid,
  Card,
} from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="90vh"
        as="section"
      >
        <VisuallyHidden>
          <Heading as="h1">IronProjects Hub</Heading>
        </VisuallyHidden>
        <Container maxW="container.lg">
          <Heading as="h2" size="3xl" mb={4}>
            Do you feel like you could use an extra hand in your product design?
          </Heading>

          <Text fontSize="2xl">
            If your team needs extra help in solving design challenges (general
            UX/UI, websites, apps, digital user experience), our students are
            eager to get their hands on exciting and innovative products! Free
            of charge 🙌
          </Text>
        </Container>
      </Box>

      <Box as="section">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Previous Editions
          </Heading>
          <Text fontSize="xl">
            Not sure what you can get from this? Check out the results from
            previous editions:
          </Text>
          <SimpleGrid columns={3} spacing={16}>
            <Card></Card>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
