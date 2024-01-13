import { useState, useRef } from 'react';
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

function AddProject({ setSubmitted, submitted, adding, setAdding }) {
  const { userType } = useParams();

  const [companyId, setCompanyId] = useState(Number(userType));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [videoSubmission, setVideoSubmission] = useState('');

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

      await axios.post(`${import.meta.env.VITE_API_URL}/projects`, requestBody);

      setSubmitted(!submitted);
      setAdding(!adding);
    } catch (error) {
      console.log(error);
    }
  };

  // Chakra drawer

  const firstField = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addingProject = () => {
    // setAdding(!adding);
    onOpen();
  };

  return (
    /* Drawer */
    <>
      <div className='AddProject'>
        <Button onClick={addingProject}>Add New Project</Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Add Project</DrawerHeader>
            <DrawerBody>
              <form method='post' onSubmit={handleSubmit} id='my-form'>
                <Stack spacing='24px'>
                  <Box>
                    <FormLabel htmlFor='name'>Stakeholder Name:</FormLabel>
                    <Input
                      ref={firstField}
                      id='name'
                      placeholder='Please enter user name'
                      type='text'
                      name='name'
                      onChange={e => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='email'>Stakeholder Email:</FormLabel>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='challengeName'>
                      Challenge Name:
                    </FormLabel>
                    <Input
                      type='text'
                      name='challengeName'
                      id='challengeName'
                      onChange={e => setChallengeName(e.target.value)}
                      value={challengeName}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='challengeDescription'>
                      Challenge Description:
                    </FormLabel>
                    <Textarea
                      name='challengeDescription'
                      id='challengeDescription'
                      cols='30'
                      rows='10'
                      onChange={e => setChallengeDescription(e.target.value)}
                      value={challengeDescription}
                      required
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor='videoSubmission'>
                      Pitch Video URL
                    </FormLabel>
                    <InputGroup>
                      <Input
                        type='url'
                        name='videoSubmission'
                        id='videoSubmission'
                        onChange={e => setVideoSubmission(e.target.value)}
                        value={videoSubmission}
                        required
                      />
                    </InputGroup>
                  </Box>
                </Stack>
              </form>
            </DrawerBody>
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='blue'
                type='submit'
                form='my-form'
                onClick={onClose}
              >
                Add
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* <div className='AddProject'>
        <h2>Add Project</h2>
        <form method='post' onSubmit={handleSubmit}>
          <label htmlFor='name'>Stakeholder Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
          <label htmlFor='email'>Stakeholder Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
          <label htmlFor='challengeName'>Challenge Name:</label>
          <input
            type='text'
            name='challengeName'
            id='challengeName'
            onChange={e => setChallengeName(e.target.value)}
            value={challengeName}
            required
          />
          <label htmlFor='challengeDescription'>Challenge Description</label>
          <textarea
            name='challengeDescription'
            id='challengeDescription'
            cols='30'
            rows='10'
            onChange={e => setChallengeDescription(e.target.value)}
            value={challengeDescription}
            required
          ></textarea>
          <label htmlFor='videoSubmission'>Pitch Video URL:</label>
          <input
            type='url'
            name='videoSubmission'
            id='videoSubmission'
            onChange={e => setVideoSubmission(e.target.value)}
            value={videoSubmission}
            required
          />

          <button type='submit'>Add</button>
        </form>
      </div> */}
    </>
  );
}

export default AddProject;
