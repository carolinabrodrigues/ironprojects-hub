/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

import {
  Heading,
  Card,
  CardBody,
  Stack,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';

import { ViewIcon } from '@chakra-ui/icons';

function WishList({ matches, userType, projects }) {
  // const [chosenProjects, setChosenProjects] = useState([]);

  const getChosenProjects = () => {
    const filterStudentMatches = matches
      .filter(match => match.studentId === +userType)
      .map(match => match.projectId);

    const checkMatches = project => {
      for (let i = 0; i < filterStudentMatches.length; i++) {
        if (filterStudentMatches[i] === project.id) {
          return true;
        }
      }
      return false;
    };

    const filteredChosenProjects = projects.filter(checkMatches);

    if (
      (filteredChosenProjects && filteredChosenProjects.length === 0) ||
      !filteredChosenProjects
    ) {
      return (
        <Text>
          You have not chosen any projects yet! Click "Show Interest" to add
          projects to your list.
        </Text>
      );
    } else if (filteredChosenProjects && filteredChosenProjects.length > 0) {
      return filteredChosenProjects.map(project => {
        return (
          <Card
            key={`wish-${project.id}`}
            className="ProjectCard"
            my={4}
            variant="filled"
          >
            <CardBody>
              <Flex justifyContent="space-between" gap={4} alignItems="center">
                <Stack spacing={6}>
                  <Heading size="md">{project.challengeName}</Heading>
                  <Text fontSize="md" noOfLines={[1, 2]}>
                    {project.challengeDescription}
                  </Text>
                </Stack>
                <Stack>
                  <Link to={`${project.id}`}>
                    <Button size="md" variant="link" className="LinkButton">
                      <ViewIcon mr={2} />
                      View more
                    </Button>
                  </Link>
                </Stack>
              </Flex>
            </CardBody>
          </Card>
        );
      });
    }
  };

  return (
    <div className="WishList">
      <Heading as="h2" size="md" py={17}>
        Your choices
      </Heading>
      {projects && getChosenProjects()}
    </div>
  );
}

export default WishList;
