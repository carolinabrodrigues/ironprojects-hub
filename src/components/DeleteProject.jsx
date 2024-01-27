/* eslint-disable react/prop-types */
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { DeleteIcon } from '@chakra-ui/icons';

function DeleteProject({ userType, projectId, project }) {
  // alert to delete
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();

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

  return (
    <div className="DeleteProject">
      <Button colorScheme="red" onClick={onOpen} variant="link" size="lg">
        <DeleteIcon mx={2} /> Delete
      </Button>

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
              Are you sure you want to delete <i>{project.challengeName}</i>?
              You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                size="md"
                variant="link"
                className="LinkButton"
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={deleteProject}
                ml={4}
                borderRadius="32px"
                size="md"
              >
                Delete {project.challengeName}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default DeleteProject;
