import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Stack,
  FormLabel,
  InputGroup,
  Input,
  Textarea,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

function EditProjectDetails({ edited, setEdited }) {
  const { projectId } = useParams();

  // const [companyId, setCompanyId] = useState(Number(userType));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [videoSubmission, setVideoSubmission] = useState('');

  const getSingleProject = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );
      setName(response.data.stakeholders[0].name);
      setEmail(response.data.stakeholders[0].email);
      setChallengeName(response.data.challengeName);
      setChallengeDescription(response.data.challengeDescription);
      setVideoSubmission(response.data.videoSubmission);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const stakeholders = [
        {
          name: name,
          email: email,
        },
      ];

      const requestBody = {
        stakeholders,
        challengeName,
        challengeDescription,
        videoSubmission,
      };

      await axios.put(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`,
        requestBody
      );

      setEdited(!edited);
    } catch (error) {
      console.log(error);
    }
  };

  // Chakra drawer

  const firstField = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editingProject = () => {
    onOpen();
  };

  return (
    /* Drawer */
    <>
      <div className="EditProject">
        <Button onClick={editingProject}>Edit Project</Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Edit Project</DrawerHeader>
            <DrawerBody>
              <form method="post" onSubmit={handleSubmit} id="my-form">
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="name">Stakeholder Name:</FormLabel>
                    <Input
                      ref={firstField}
                      id="name"
                      placeholder="Please enter user name"
                      type="text"
                      name="name"
                      onChange={e => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="email">Stakeholder Email:</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="challengeName">
                      Challenge Name:
                    </FormLabel>
                    <Input
                      type="text"
                      name="challengeName"
                      id="challengeName"
                      onChange={e => setChallengeName(e.target.value)}
                      value={challengeName}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="challengeDescription">
                      Challenge Description:
                    </FormLabel>
                    <Textarea
                      name="challengeDescription"
                      id="challengeDescription"
                      cols="30"
                      rows="10"
                      onChange={e => setChallengeDescription(e.target.value)}
                      value={challengeDescription}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="videoSubmission">
                      Pitch Video URL
                    </FormLabel>
                    <InputGroup>
                      <Input
                        type="url"
                        name="videoSubmission"
                        id="videoSubmission"
                        onChange={e => setVideoSubmission(e.target.value)}
                        value={videoSubmission}
                        required
                      />
                    </InputGroup>
                  </Box>
                </Stack>
              </form>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                type="submit"
                form="my-form"
                onClick={onClose}
              >
                Save Changes
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default EditProjectDetails;
