/* eslint-disable react/prop-types */
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
  HStack,
} from '@chakra-ui/react';

import { SettingsIcon } from '@chakra-ui/icons';

function EditProjectDetails({ edited, setEdited }) {
  const { projectId, userType } = useParams();

  const [companyId, setCompanyId] = useState(Number(userType));
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
        companyId,
        stakeholders,
        challengeName,
        challengeDescription,
        videoSubmission,
      };

      console.log(requestBody);

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
        <Button
          variant="solid"
          size="lg"
          onClick={editingProject}
          className="SolidButton"
        >
          {' '}
          <SettingsIcon mr={2} /> Edit
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
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
                      placeholder="Carolina Martins"
                      type="text"
                      name="name"
                      onChange={e => setName(e.target.value)}
                      value={name}
                      required
                      size="lg"
                      focusBorderColor="#3800EB"
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="email">Stakeholder Email:</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="carolina@martins.com"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      required
                      size="lg"
                      focusBorderColor="#3800EB"
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
                      placeholder="IronProjects Hub"
                      onChange={e => setChallengeName(e.target.value)}
                      value={challengeName}
                      required
                      size="lg"
                      focusBorderColor="#3800EB"
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
                      size="lg"
                      placeholder="Connecting students with companies"
                      focusBorderColor="#3800EB"
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
                        placeholder="http://www.google.com"
                        size="lg"
                        focusBorderColor="#3800EB"
                      />
                    </InputGroup>
                  </Box>
                </Stack>
              </form>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <HStack spacing={4}>
                <Button
                  variant="link"
                  size="lg"
                  className="LinkButton"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  className="SolidButton"
                  size="lg"
                  type="submit"
                  form="my-form"
                  onClick={onClose}
                >
                  Edit Project
                </Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default EditProjectDetails;
