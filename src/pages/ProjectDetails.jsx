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
} from '@chakra-ui/react';

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [edited, setEdited] = useState(true);
  const [interested, setInterested] = useState(null);
  const [matches, setMatches] = useState([]);
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

  // NEEDS REVIEW
  const getMatchId = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projectsStudents`
      );

      setMatches(response.data);

      const foundMatch = matches.find(
        match => match.projectId === +projectId && match.studentId === +userType
      );

      setFoundMatchId(foundMatch.id);
      setInterested(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatchId();
  }, [interested]);

  const handleInterest = async () => {
    if (interested === false) {
      try {
        const projectsStudents = {
          projectId: projectId,
          studentId: userType,
        };

        const requestBody = { projectsStudents };

        await axios.post(
          `${import.meta.env.VITE_API_URL}/projectsStudents`,
          requestBody
        );

        setInterested(!interested);
        console.log(interested);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/projectsStudents/${foundMatchId}`
        );

        setInterested(!interested);
        console.log(interested);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // alert to delete
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <div className='ProjectDetails'>
      <Box pt='120px'>
        {+userType > 500 && (
          <Button onClick={handleInterest}>Show Interest</Button>
        )}
        {+userType < 100 && (
          <>
            <EditProjectDetails edited={edited} setEdited={setEdited} />

            <Button colorScheme='red' onClick={onOpen}>
              Delete Project
            </Button>

            {/* alert to delete */}
            {project && (
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                      Delete Project
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure you want to delete{' '}
                      <i>{project.challengeName}</i>? You can't undo this action
                      afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme='red' onClick={deleteProject} ml={3}>
                        Delete {project.challengeName}
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            )}
          </>
        )}
        {project && (
          <>
            <h1>{project.challengeName}</h1>
            <p>{project.challengeDescription}</p>
            {project.stakeholders.map(stakeholder => {
              return (
                <div key={project.id} className='stakeholder-info'>
                  <p>{stakeholder.name}</p>
                  <p>{stakeholder.email}</p>
                </div>
              );
            })}
          </>
        )}
      </Box>
    </div>
  );
}

export default ProjectDetails;
