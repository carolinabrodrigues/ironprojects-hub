/* eslint-disable react/prop-types */

import ProjectsList from '../components/ProjectsList';
import WishList from '../components/WishList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

import {
  Heading,
  Text,
  Box,
  Link,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Container,
  Icon,
} from '@chakra-ui/react';

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

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
    <div className="UserPage">
      {/* header */}
      <Box pt="120px" pb="60px" px="80px" className="UserHeader" as="header">
        {user && (
          <Heading as="h1" my={17}>
            Welcome, {user.name}
          </Heading>
        )}

        {/* if company */}
        {user && +userType < 100 && (
          <>
            <Container maxW="container.3xl" my={17} align="left" p="0">
              <Card variant="filled" align="left" className="CompanyCard">
                <CardHeader pb={4}>
                  <Heading as="h2" size="md">
                    Company Profile
                  </Heading>
                </CardHeader>

                <CardBody>
                  <Flex justifyContent="space-between">
                    <Box w="24%">
                      <Heading as="h3" size="sm" textTransform="uppercase">
                        User
                      </Heading>
                      <Text pt="2" fontSize="md">
                        {user.userName}
                      </Text>
                    </Box>

                    <Box w="24%">
                      <Heading as="h3" size="sm" textTransform="uppercase">
                        Email
                      </Heading>
                      <Text pt="2" fontSize="md">
                        {user.userEmail}
                      </Text>
                    </Box>
                    <Box w="24%">
                      <Heading as="h3" size="sm" textTransform="uppercase">
                        Company Name
                      </Heading>
                      <Text pt="2" fontSize="md">
                        {user.name}
                      </Text>
                    </Box>

                    <Box w="24%">
                      <Heading as="h3" size="sm" textTransform="uppercase">
                        <Link href={user.website} isExternal>
                          Website{' '}
                          <Icon
                            as={OpenInNewRoundedIcon}
                            mx={1}
                            boxSize="16px"
                          />
                        </Link>
                      </Heading>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </Container>
          </>
        )}

        {/* if student */}
        {user && +userType > 500 && (
          <WishList
            userType={userType}
            submitted={submitted}
            setSubmitted={setSubmitted}
            matches={matches}
            setMatches={setMatches}
            projects={projects}
          />
        )}
      </Box>

      {/* Projects List */}
      <Box py="60px" px="80px" className="ProjectsList">
        {/* if company */}
        {user && +userType < 100 && (
          <ProjectsList
            userType={userType}
            submitted={submitted}
            setSubmitted={setSubmitted}
            setMatches={setMatches}
            projects={projects}
          />
        )}

        {/* if student */}
        {user && +userType > 500 && (
          <ProjectsList
            userType={userType}
            submitted={submitted}
            setSubmitted={setSubmitted}
            setMatches={setMatches}
            projects={projects}
          />
        )}
      </Box>
      <Footer userType={userType} />
    </div>
  );
}

export default User;
