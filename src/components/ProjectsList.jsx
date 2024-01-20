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

function ProjectsList({ userType, setSubmitted, submitted, projects }) {
  const showProjects = user => {
    const filteredProjects = projects.filter(
      project => project.companyId === +user
    );
    /* if student */
    if (+user > 500 && projects.length === 0) {
      return <p>No projects yet!</p>;
    } else if (+user > 500) {
      return (
        <>
          <Heading as="h2" size="md" my={17}>
            All Projects
          </Heading>
          {projects.map(project => {
            return (
              <>
                <div key={project.id} className="ProjectCard">
                  <Card>
                    <CardBody>
                      <Flex>
                        <Stack spacing="7">
                          <Heading size="md">{project.challengeName}</Heading>
                          <Text fontSize="md">
                            {project.challengeDescription}
                          </Text>
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
              </>
            );
          })}
        </>
      );
    } else if (+user < 100) {
      /* if company */
      return (
        <>
          <Flex justifyContent="space-between" mb={12}>
            <Heading as="h2" size="md" my={17}>
              Your Projects
            </Heading>
            <AddProject submitted={submitted} setSubmitted={setSubmitted} />
          </Flex>

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
    <div className="ProjectsList">{projects && showProjects(userType)}</div>
  );
}

export default ProjectsList;
