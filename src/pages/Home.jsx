import {
  Container,
  Heading,
  VisuallyHidden,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  Image,
  Button,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import Footer from '../components/Footer';

import granterLogo from '../assets/logo/granter.png';
import granterMockup from '../assets/mockup/granter.png';
import keepinLogo from '../assets/logo/keepin.png';
import keepinMockup from '../assets/mockup/keepin.png';
import sentryonicsLogo from '../assets/logo/sentryonics.png';
import sentryonicsMockup from '../assets/mockup/sentryonics.png';
import heroImage from '../assets/hero-image.png';

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
        className="Hero"
        px="80px"
      >
        <VisuallyHidden>
          <Heading as="h1">IronProjects Hub</Heading>
        </VisuallyHidden>
        {/* <HStack> */}
        <Container maxW="container.xl" px={0}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} alignItems="center">
            <GridItem colSpan={2}>
              <Heading
                as="h2"
                size="3xl"
                mb={4}
                lineHeight="120%"
                fontWeight="semibold"
              >
                Do you feel like you could use an extra hand in your product
                design?
              </Heading>

              <Text fontSize="xl" lineHeight="150%" fontWeight="medium">
                If your team needs extra help in solving design challenges
                (general UX/UI, websites, apps, digital user experience), our
                students are eager to get their hands on exciting and innovative
                products! Free of charge 🙌
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Image src={heroImage} alt="Hero Image" />
            </GridItem>
          </Grid>
        </Container>
        {/* </HStack> */}
      </Box>

      <Box as="section" mt={16}>
        <Container maxW="container.xl" px={0}>
          <Heading as="h2" size="xl" mb={4}>
            Previous Editions
          </Heading>
          <Text fontSize="xl">
            Not sure what you can get from this? Check out the results from
            previous editions:
          </Text>
          <SimpleGrid columns={3} spacing="24px" mt={16}>
            <Card variant="filled" className="StudentProjectCard">
              <CardBody>
                <VStack align="left" justify="space-between" height="100%">
                  <VStack align="left" spacing="16px">
                    <Image
                      src={granterLogo}
                      alt="Granter.ai"
                      h="32px"
                      fit="contain"
                      align="left"
                    />

                    <VStack spacing="8px" align="left">
                      <Heading as="h3" size="xl">
                        Redesign the Granter.ai website
                      </Heading>
                      <Text fontSize="md" fontWeight="bold">
                        José Viegas
                      </Text>
                    </VStack>

                    <Image src={granterMockup} alt="Project mockup" />
                  </VStack>
                  <Link href="https://www.jviegasdesigns.com/work/granter-ai">
                    <Button
                      size="lg"
                      variant="outline"
                      borderRadius="32px"
                      w="100%"
                      className="OutlineButton"
                    >
                      See Project
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>
            <Card variant="filled" className="StudentProjectCard">
              <CardBody>
                <VStack align="left" justify="space-between" height="100%">
                  <VStack align="left" spacing="16px">
                    <Image
                      src={keepinLogo}
                      alt="KeepIn"
                      h="32px"
                      fit="contain"
                      align="left"
                    />

                    <VStack spacing="8px" align="left">
                      <Heading as="h3" size="xl">
                        Design Insurance Wallet App
                      </Heading>
                      <Text fontSize="md" fontWeight="bold">
                        Liliana Santos
                      </Text>
                    </VStack>

                    <Image src={keepinMockup} alt="Project mockup" />
                  </VStack>
                  <Link href="https://www.lilianasantosdesigns.com/keepin">
                    <Button
                      size="lg"
                      variant="outline"
                      borderRadius="32px"
                      w="100%"
                      className="OutlineButton"
                    >
                      See Project
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>
            <Card variant="filled" className="StudentProjectCard">
              <CardBody>
                <VStack align="left" justify="space-between" height="100%">
                  <VStack align="left" spacing="16px">
                    <Image
                      src={sentryonicsLogo}
                      alt="Sentryonics"
                      h="32px"
                      fit="contain"
                      align="left"
                    />

                    <VStack spacing="8px" align="left">
                      <Heading as="h3" size="xl">
                        Design Cybersecurity Dashboard
                      </Heading>
                      <Text fontSize="md" fontWeight="bold">
                        Iva Machado
                      </Text>
                    </VStack>

                    <Image src={sentryonicsMockup} alt="Project mockup" />
                  </VStack>

                  <Link href="https://ivamachado.framer.website/Sentryonics">
                    <Button
                      size="lg"
                      variant="outline"
                      borderRadius="32px"
                      w="100%"
                      className="OutlineButton"
                    >
                      See Project
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default Home;
