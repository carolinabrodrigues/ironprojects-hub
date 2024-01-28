/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EditProjectDetails from '../components/EditProjectDetails';
import DeleteProject from '../components/DeleteProject';
import InterestButton from '../components/InterestButton';
import Footer from '../components/Footer';

import {
  Box,
  Heading,
  HStack,
  VStack,
  Flex,
  Grid,
  GridItem,
  Link,
  AspectRatio,
  Icon,
  Card,
  CardBody,
  Text,
} from '@chakra-ui/react';

import {
  OpenInNewRounded,
  CorporateFareRounded,
  PersonRounded,
  EmojiEventsRounded,
} from '@mui/icons-material';

function ProjectDetails({ matches, setMatches }) {
  const [project, setProject] = useState(null);
  const [edited, setEdited] = useState(true);
  const [company, setCompany] = useState(null);
  // const [interested, setInterested] = useState(null);
  const { projectId, userType } = useParams();

  const getSingleProject = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );
      setProject(response.data);

      const companyResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/companies/${response.data.companyId}`
      );

      setCompany(companyResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();

    /* return () => {
      setMatch(null);
    }; */
  }, [projectId, edited]);

  const displayHeader = user => {
    if (user > 500) {
      return (
        <>
          <Flex justifyContent="space-between" mb={12}>
            <Heading as="h1" size="xl">
              {project.challengeName}
            </Heading>
            <HStack spacing={2}>
              <InterestButton
                userType={+userType}
                projectId={+projectId}
                matches={matches}
                setMatches={setMatches}
              />
            </HStack>
          </Flex>
        </>
      );
    } else if (user < 100) {
      return (
        <>
          <Flex justifyContent="space-between" mb={12}>
            <Heading as="h1" size="xl">
              {project.challengeName}
            </Heading>
            <HStack spacing={4}>
              <DeleteProject
                userType={userType}
                projectId={projectId}
                project={project}
              />
              <EditProjectDetails edited={edited} setEdited={setEdited} />
            </HStack>
          </Flex>
        </>
      );
    }
  };

  // displaying page
  return (
    <div className="ProjectDetails">
      <Box p="120px 80px 32px" className="ProjectDetailsInfo">
        {project && displayHeader(+userType)}
        {project && company && (
          <>
            <Grid templateColumns="repeat(12, 1fr)" gap={8}>
              <GridItem colSpan={7}>
                <Card>
                  <CardBody>
                    <VStack align="left" mb={2} spacing={4}>
                      <Heading as="h2" size="md">
                        <Icon as={CorporateFareRounded} mx={1} mb={-1} />
                        About {company.name}:
                      </Heading>

                      <Link href={company.website} isExternal pl="4px">
                        <Heading as="h3" size="sm">
                          Website
                          <Icon
                            as={OpenInNewRounded}
                            mx={1}
                            mb={-0.5}
                            boxSize="16px"
                          />
                        </Heading>
                      </Link>
                      <VStack align="left" pl="4px">
                        <Heading as="h3" size="sm">
                          Stakeholder information:
                        </Heading>
                        <ul className="list">
                          {project.stakeholders.map(stakeholder => {
                            return (
                              <li key={project.id} className="stakeholder-info">
                                <Icon
                                  as={PersonRounded}
                                  mx={1}
                                  mb={-1}
                                  boxSize="20px"
                                />
                                {stakeholder.name} -{' '}
                                <Link
                                  href={`mailto:${stakeholder.email}`}
                                  isExternal
                                >
                                  {stakeholder.email}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem colSpan={5}>
                <AspectRatio ratio={16 / 9} className="Video">
                  <iframe
                    title={`${project.challengeName}'s video`}
                    src={project.videoSubmission}
                    allowFullScreen
                  />
                </AspectRatio>
              </GridItem>
            </Grid>
          </>
        )}
      </Box>
      {project && (
        <Box p="32px 240px">
          <VStack align="left" mt={4}>
            <Heading as="h2" size="xl">
              <Icon as={EmojiEventsRounded} mx={1} mb={-1} boxSize="32px" />
              About the challenge:
            </Heading>

            {project.challengeDescription
              .split(
                `

`
              )
              .map((str, index) => {
                return (
                  <Text
                    pl="4px"
                    fontSize="lg"
                    lineHeight="150%"
                    key={`${project.id}${index}`}
                  >
                    {str}
                  </Text>
                );
              })}
          </VStack>
        </Box>
      )}
      <Footer userType={userType} />
    </div>
  );
}

export default ProjectDetails;
