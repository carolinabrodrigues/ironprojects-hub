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

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [edited, setEdited] = useState(true);
  // const [interested, setInterested] = useState(null);
  const [matches, setMatches] = useState([]);
  const [changeInterest, setChangeInterest] = useState(false);
  const [match, setMatch] = useState(null);
  const [foundMatchId, setFoundMatchId] = useState(null);

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
  }, [projectId, edited]);

  const getMatch = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projectsStudents`
      );

      setMatches(response.data);
      const matchesArray = response.data;

      const foundMatch = matchesArray.find(match => {
        return match.projectId === +projectId && match.studentId === +userType;
      });

      if (foundMatch) {
        setMatch(true);
        setFoundMatchId(foundMatch.id);
      } else {
        setMatch(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatch();
  }, [match]);

  const handleInterest = async () => {
    if (!match && match !== null) {
      try {
        const requestBody = {
          projectId: +projectId,
          studentId: +userType,
        };

        await axios.post(
          `${import.meta.env.VITE_API_URL}/projectsStudents`,
          requestBody
        );

        setMatch(!match);
      } catch (error) {
        console.log(error);
      }
    } else if (match && match !== null) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/projectsStudents/${foundMatchId}`
        );

        setMatch(!match);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleInterest();
  }, [changeInterest]);

  const displayHeader = user => {
    if (user > 500) {
      return (
        <>
          <Flex justifyContent='space-between' mb={12}>
            <Heading as='h1' size='xl'>
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
          <Flex justifyContent='space-between' mb={12}>
            <Heading as='h1' size='xl'>
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
    <div className='ProjectDetails'>
      <Box p='120px 80px 32px'>
        {project && displayHeader(+userType)}
        {project && (
          <Grid templateColumns='repeat(6, 1fr)' gap={4}>
            <GridItem colSpan={4}>
              <VStack align='left'>
                <Heading as='h2' size='md'>
                  About the challenge:
                </Heading>
                <p>{project.challengeDescription}</p>
                <AspectRatio maxW='560px' ratio={1}>
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
                  <div key={project.id} className='stakeholder-info'>
                    <VStack align='left'>
                      <Heading as='h2' size='md'>
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
