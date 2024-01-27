/* eslint-disable react/prop-types */

import ProjectsList from '../components/ProjectsList';
import WishList from '../components/WishList';
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
  Container,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function User({ matches, setMatches }) {
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(null);
  const [projects, setProjects] = useState([]);

  const { userType } = useParams();

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

  const getProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects`
      );
      setProjects(response.data);
      setSubmitted(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, [submitted]);

  return (
    <div className='UserPage'>
      <Box pt='120px' mx={10}>
        {user && (
          <Heading as='h1' my={17}>
            Welcome, {user.name}
          </Heading>
        )}

        {/* if company */}
        {user && +userType < 100 && (
          <>
            <Container maxW='container.3xl' my={17} align='left' p='0'>
              <Card align='left'>
                <CardHeader>
                  <Heading as='h2' size='md'>
                    Company Profile
                  </Heading>
                </CardHeader>

                <CardBody>
                  <Flex>
                    <Box w='250px'>
                      <Stack spacing={6}>
                        <Box>
                          <Heading as='h3' size='xs' textTransform='uppercase'>
                            User
                          </Heading>
                          <Text pt='2' fontSize='sm'>
                            {user.userName}
                          </Text>
                        </Box>

                        <Box>
                          <Heading as='h3' size='xs' textTransform='uppercase'>
                            Email
                          </Heading>
                          <Text pt='2' fontSize='sm'>
                            {user.userEmail}
                          </Text>
                        </Box>
                      </Stack>
                    </Box>
                    <Box w='250px'>
                      <Stack spacing={6}>
                        <Box>
                          <Heading as='h3' size='xs' textTransform='uppercase'>
                            Company Name
                          </Heading>
                          <Text pt='2' fontSize='sm'>
                            {user.name}
                          </Text>
                        </Box>

                        <Box>
                          <Heading as='h3' size='xs' textTransform='uppercase'>
                            <Link href={user.website} isExternal>
                              Website <ExternalLinkIcon mx='2px' />
                            </Link>
                          </Heading>
                        </Box>
                      </Stack>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </Container>

            <ProjectsList
              userType={userType}
              submitted={submitted}
              setSubmitted={setSubmitted}
              setMatches={setMatches}
              projects={projects}
            />
          </>
        )}

        {/* if student */}
        {user && +userType > 500 && (
          <>
            <Box>
              <WishList
                userType={userType}
                submitted={submitted}
                setSubmitted={setSubmitted}
                matches={matches}
                setMatches={setMatches}
                projects={projects}
              />
              <ProjectsList
                userType={userType}
                submitted={submitted}
                setSubmitted={setSubmitted}
                setMatches={setMatches}
                projects={projects}
              />
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}

export default User;
