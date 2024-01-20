import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddProject from './AddProject';

import {
  Heading,
  Card,
  CardBody,
  Stack,
  Button,
  Text,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import { ViewIcon } from '@chakra-ui/icons';

function ProjectsList({ userType, setSubmitted, submitted }) {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      console.log('logging projects', projects);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, [submitted]);

  const showProjects = user => {
    const filteredProjects = projects.filter(
      project => project.companyId === +user
    );
    /* if student */
    if (+user > 500 && projects.length === 0) {
      return <p>No projects yet!</p>;
    } else if (+user > 500) {
      return projects.map(project => {
        return (
          <div key={project.id} className="ProjectCard">
            <Card>
              <CardBody>
                <Flex>
                  <Stack spacing="7">
                    <Heading size="md">{project.challengeName}</Heading>
                    <Text fontSize="md">{project.challengeDescription}</Text>
                  </Stack>
                  <Spacer />
                  <Stack>
                    <Link to={`${project.id}`}>
                      <Button>
                        <ViewIcon mr={2} />
                        View more
                      </Button>
                    </Link>
                  </Stack>
                </Flex>
              </CardBody>
            </Card>
          </div>
        );
      });
    } else if (+user < 100) {
      /* if company */
      return (
        <>
          <AddProject submitted={submitted} setSubmitted={setSubmitted} />
          {projects.length === 0 && <Text>Loading projects</Text>}
          {filteredProjects.map(project => {
            return (
              <div key={project.id} className="ProjectCard">
                <Card>
                  <CardBody>
                    <Stack spacing="7">
                      <Heading size="md">{project.challengeName}</Heading>
                      <Text fontSize="md">{project.challengeDescription}</Text>
                      <Link to={`${project.id}`}>
                        <Button>
                          <ViewIcon mr={2} /> View more
                        </Button>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="ProjectsList">
      <Heading as="h1" my={17}>
        Projects
      </Heading>
      {projects.length > 0 && showProjects(userType)}
    </div>
  );
}

export default ProjectsList;
