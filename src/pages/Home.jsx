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
} from '@chakra-ui/react';

import Footer from '../components/Footer';

import granterLogo from '../assets/logo/granter.png';
import granterMockup from '../assets/mockup/granter.png';
import keepinLogo from '../assets/logo/keepin.png';
import keepinMockup from '../assets/mockup/keepin.png';
import sentryonicsLogo from '../assets/logo/sentryonics.png';
import sentryonicsMockup from '../assets/mockup/sentryonics.png';
import preipoLogo from '../assets/logo/preipo.png';
import preipoMockup from '../assets/mockup/preipo.png';

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
          <SimpleGrid columns={3} spacing="16px" mt={16}>
            <Card variant="outline">
              <CardBody>
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
                  <Link href="https://www.jviegasdesigns.com/work/granter-ai">
                    <Button
                      size="lg"
                      variant="outline"
                      borderRadius="32px"
                      w="100%"
                    >
                      See Project
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>
            <Card variant="outline">
              <CardBody>
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
                  <Link href="https://www.lilianasantosdesigns.com/keepin">
                    <Button
                      size="lg"
                      variant="outline"
                      borderRadius="32px"
                      w="100%"
                    >
                      See Project
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>
            <Card variant="outline">
              <CardBody>
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
                  <Link href="https://ivamachado.framer.website/Sentryonics">
                    <Button
                      size="lg"
                      variant="outline"
                      borderRadius="32px"
                      w="100%"
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
