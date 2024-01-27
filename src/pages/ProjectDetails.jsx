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
} from '@chakra-ui/react';

function ProjectDetails({ matches, setMatches }) {
  const [project, setProject] = useState(null);
  const [edited, setEdited] = useState(true);
  // const [interested, setInterested] = useState(null);
  const { projectId, userType } = useParams();

  const getSingleProject = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );

      setProject(response.data);
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
            <HStack spacing={6}>
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
            <HStack spacing={6}>
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
      <Box p="120px 80px 32px">
        {project && displayHeader(+userType)}
        {project && (
          <Grid templateColumns="repeat(6, 1fr)" gap={8}>
            <GridItem colSpan={4}>
              <VStack align="left">
                <Heading as="h2" size="md">
                  About the challenge:
                </Heading>
                <p>{project.challengeDescription}</p>
                <AspectRatio mt={8}>
                  <iframe
                    title={`${project.challengeName}'s video`}
                    src={project.videoSubmission}
                    allowFullScreen
                  />
                </AspectRatio>
              </VStack>
            </GridItem>
            <GridItem colSpan={2}>
              {project.stakeholders.map(stakeholder => {
                return (
                  <div key={project.id} className="stakeholder-info">
                    <VStack align="left">
                      <Heading as="h2" size="md">
                        Stakeholder information:
                      </Heading>
                      <p>
                        {stakeholder.name} -{' '}
                        <Link href={`mailto:${stakeholder.email}`} isExternal>
                          {stakeholder.email}
                        </Link>
                      </p>
                    </VStack>
                  </div>
                );
              })}
            </GridItem>
          </Grid>
        )}
      </Box>
      <Footer userType={userType} />
    </div>
  );
}

export default ProjectDetails;
