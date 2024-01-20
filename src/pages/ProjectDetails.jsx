/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EditProjectDetails from '../components/EditProjectDetails';
import DeleteProject from '../components/DeleteProject';

import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Flex,
  Grid,
  GridItem,
  Link,
  AspectRatio,
} from '@chakra-ui/react';

function ProjectDetails({
  changeInterest,
  setChangeInterest,
  match,
  setMatch,
  defineMatch,
  handleInterest,
  matches,
  setMatches,
  foundMatchId,
  setFoundMatchId,
  getMatch,
}) {
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

    return () => {
      setMatch(null);
    };
  }, [projectId, edited]);

  // to repeat on User
  useEffect(() => {
    handleInterest(projectId, userType);
  }, [changeInterest]);

  useEffect(() => {
    defineMatch(projectId, userType);
  }, [matches, match]);

  const displayHeader = user => {
    if (user > 500) {
      return (
        <>
          <Flex justifyContent="space-between" mb={12}>
            <Heading as="h1" size="xl">
              {project.challengeName}
            </Heading>
            <HStack spacing={6}>
              {/* new - button shows in which stage is the backend */}
              <Button onClick={() => setChangeInterest(!changeInterest)}>
                {match ? 'Not Interested' : 'Show Interest'}
              </Button>
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
          <Grid templateColumns="repeat(6, 1fr)" gap={4}>
            <GridItem colSpan={4}>
              <VStack align="left">
                <Heading as="h2" size="md">
                  About the challenge:
                </Heading>
                <p>{project.challengeDescription}</p>
                <AspectRatio maxW="560px" ratio={1}>
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
    </div>
  );
}

export default ProjectDetails;
