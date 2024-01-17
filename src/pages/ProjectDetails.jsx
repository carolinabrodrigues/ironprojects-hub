import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EditProjectDetails from '../components/EditProjectDetails';

import {
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
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
  const navigate = useNavigate();

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

  const displayProject = user => {
    if (user > 500) {
      return (
        <>
          <Flex justifyContent="space-between" mb={12}>
            <Heading as="h1" size="xl">
              {project.challengeName}
            </Heading>
            <HStack spacing={6}>
              <Button onClick={() => setChangeInterest(!changeInterest)}>
                Show Interest
              </Button>
            </HStack>
          </Flex>
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
        </>
      );
    } else if (user < 100) {
      return (
        <>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Project
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure you want to delete <i>{project.challengeName}</i>
                  ? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={deleteProject} ml={3}>
                    Delete {project.challengeName}
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          <Flex justifyContent="space-between" mb={12}>
            <Heading as="h1" size="xl">
              {project.challengeName}
            </Heading>
            <HStack spacing={6}>
              <Button colorScheme="red" onClick={onOpen} variant="link">
                Delete Project
              </Button>
              <EditProjectDetails edited={edited} setEdited={setEdited} />
            </HStack>
          </Flex>
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
        </>
      );
    }

    return (
      <>
        <Flex justifyContent="space-between" mb={12}>
          <Heading as="h1" size="xl">
            {project.challengeName}
          </Heading>
          <HStack spacing={6}>
            <Button colorScheme="red" onClick={onOpen} variant="link">
              Delete Project
            </Button>
            <EditProjectDetails edited={edited} setEdited={setEdited} />
          </HStack>
        </Flex>
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
      </>
    );
  };

  const deleteProject = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );
      onClose();
      navigate(`/${userType}/projects`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, [projectId, edited]);

  // alert to delete
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <div className="ProjectDetails">
      <Box p="120px 80px 32px">{project && displayProject(+userType)}</Box>
    </div>
  );
}

export default ProjectDetails;
