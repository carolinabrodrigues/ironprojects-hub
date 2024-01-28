/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import AddProject from './AddProject';
import InterestButton from './InterestButton';

import {
  Heading,
  Card,
  CardBody,
  Stack,
  Button,
  Text,
  Flex,
  HStack,
  Icon,
} from '@chakra-ui/react';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

function ProjectsList({
  userType,
  setSubmitted,
  submitted,
  projects,
  setMatches,
}) {
  const showProjects = user => {
    const filteredProjects = projects.filter(
      project => project.companyId === +user
    );
    /* if student */
    if (+user > 500 && projects.length === 0) {
      return <Text>No projects yet!</Text>;
    } else if (+user > 500) {
      return (
        <div key={user.id}>
          <Heading as="h2" size="md" my={2}>
            All Projects
          </Heading>
          {projects.map(project => {
            return (
              <Card
                key={project.id}
                className="ProjectCard"
                my={4}
                variant="filled"
              >
                <CardBody>
                  <Flex
                    justifyContent="space-between"
                    gap={4}
                    alignItems="center"
                  >
                    <Stack spacing={6}>
                      <Heading size="md">{project.challengeName}</Heading>
                      <Text fontSize="md" noOfLines={[1, 2]}>
                        {project.challengeDescription}
                      </Text>
                    </Stack>
                    <HStack spacing={4}>
                      <Link to={`${project.id}`}>
                        <Button size="md" variant="link" className="LinkButton">
                          <Icon
                            as={VisibilityRoundedIcon}
                            mx={1}
                            boxSize="16px"
                          />
                          View more
                        </Button>
                      </Link>
                      <InterestButton
                        userType={+userType}
                        projectId={+project.id}
                        setMatches={setMatches}
                      />
                    </HStack>
                  </Flex>
                </CardBody>
              </Card>
            );
          })}
        </div>
      );
    } else if (+user < 100) {
      /* if company */
      return (
        <>
          <Flex justifyContent="space-between" mb={6}>
            <Heading as="h2" size="md" my={2}>
              Your Projects
            </Heading>
            <AddProject submitted={submitted} setSubmitted={setSubmitted} />
          </Flex>

          {projects.length === 0 && <Text>Loading projects</Text>}
          {filteredProjects.map(project => {
            return (
              <Card
                key={project.id}
                className="ProjectCard"
                my={4}
                variant="filled"
              >
                <CardBody>
                  <Flex
                    justifyContent="space-between"
                    gap={4}
                    alignItems="center"
                  >
                    <Stack spacing={6}>
                      <Heading size="md">{project.challengeName}</Heading>
                      <Text fontSize="md" noOfLines={[1, 2]}>
                        {project.challengeDescription}
                      </Text>
                    </Stack>
                    <Link to={`${project.id}`}>
                      <Button size="md" variant="link" className="LinkButton">
                        <Icon
                          as={VisibilityRoundedIcon}
                          mx={1}
                          boxSize="16px"
                        />
                        View more
                      </Button>
                    </Link>
                  </Flex>
                </CardBody>
              </Card>
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
