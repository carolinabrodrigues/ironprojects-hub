import { useState, useEffect } from 'react';
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
  Spacer,
} from '@chakra-ui/react';

import { ViewIcon } from '@chakra-ui/icons';

function ProjectsList({
  userType,
  setSubmitted,
  submitted,
  projects,
  changeInterest,
  setChangeInterest,
  match,
  handleInterest,
  matches,
  setFoundMatchId,
  setMatch,
  defineMatch,
  foundMatchId,
}) {
  // const [projectId, setProjectId] = useState(0);

  // useEffect(() => {
  //   handleInterest(projectId, userType);
  // }, [changeInterest]);

  // const projectListInterest = id => {
  //   setProjectId(id);
  //   setChangeInterest(!changeInterest);
  // };

  // useEffect(() => {
  //   defineMatch(projectId, userType);
  // }, [matches, match]);

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
                          {/* <InterestButton
                            setChangeInterest={setChangeInterest}
                            changeInterest={changeInterest}
                            userType={userType}
                            projectId={project.id}
                            match={match}
                            defineMatch={defineMatch}
                            handleInterest={handleInterest}
                            matches={matches}
                            foundMatchId={foundMatchId}
                          /> */}
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
