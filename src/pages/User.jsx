import ProjectsList from '../components/ProjectsList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Heading,
  Text,
  Box,
  Link,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Flex,
  Spacer,
  Container,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function User({
  setMatches,
  changeInterest,
  setChangeInterest,
  match,
  setMatch,
  foundMatchId,
  setFoundMatchId,
}) {
  const [user, setUser] = useState(null);
  // to be used on projects list & details
  const [submitted, setSubmitted] = useState(false);

  const { userType } = useParams();
  console.log(userType);

  // to get the user name - if it's company or student - NOT FINISHED
  const getUser = async () => {
    if (+userType < 100) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/companies/${userType}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    } else if (+userType > 500) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/students/${userType}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [userType]);

  return (
    <div className="UserPage">
      <Box pt="120px" mx={10}>
        {user && (
          <Heading as="h1" my={17}>
            Welcome, {user.name}
          </Heading>
        )}

        {/* if company */}
        {user && +userType < 100 && (
          <>
            {/* <Box align="left" my={17}> */}
            <Container maxW="container.3xl" my={17} align="left" p="0">
              <Card align="left">
                <CardHeader>
                  <Heading as="h2" size="md">
                    Company Profile
                  </Heading>
                </CardHeader>

                <CardBody>
                  <Flex>
                    <Box w="250px">
                      <Stack spacing={6}>
                        <Box>
                          <Heading as="h3" size="xs" textTransform="uppercase">
                            User
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {user.userName}
                          </Text>
                        </Box>

                        <Box>
                          <Heading as="h3" size="xs" textTransform="uppercase">
                            Email
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {user.userEmail}
                          </Text>
                        </Box>
                      </Stack>
                    </Box>
                    <Box w="250px">
                      <Stack spacing={6}>
                        <Box>
                          <Heading as="h3" size="xs" textTransform="uppercase">
                            Company Name
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {user.name}
                          </Text>
                        </Box>

                        <Box>
                          <Heading as="h3" size="xs" textTransform="uppercase">
                            <Link href={user.website} isExternal>
                              Website <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Heading>
                        </Box>
                      </Stack>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </Container>
            {/* </Box> */}

            <ProjectsList
              userType={userType}
              submitted={submitted}
              setSubmitted={setSubmitted}
            />
          </>
        )}

        {/* if student */}
        {user && +userType > 500 && (
          <>
            <Box>
              <ProjectsList
                userType={userType}
                submitted={submitted}
                setSubmitted={setSubmitted}
                setMatches={setMatches}
                changeInterest={changeInterest}
                setChangeInterest={setChangeInterest}
                match={match}
                setMatch={setMatch}
                foundMatchId={foundMatchId}
                setFoundMatchId={setFoundMatchId}
              />
            </Box>
            <Box></Box>
          </>
        )}
      </Box>
    </div>
  );
}

export default User;
