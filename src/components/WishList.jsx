import { useState } from 'react';
import { Link } from 'react-router-dom';

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

function WishList({ matches, userType, projects }) {
  const [chosenProjects, setChosenProjects] = useState([]);

  const getChosenProjects = () => {
    console.log(matches);
    const filterStudentMatches = matches
      .filter(match => match.studentId === +userType)
      .map(match => match.projectId);

    console.log('filterStudentMatches.projectId', filterStudentMatches);

    const checkMatches = project => {
      for (let i = 0; i < filterStudentMatches.length; i++) {
        if (filterStudentMatches[i] === project.id) {
          return true;
        } else {
          return false;
        }
      }
    };

    const filteredChosenProjects = projects.filter(checkMatches);

    console.log('filteredChosenProjects', filteredChosenProjects);
    if (
      (filteredChosenProjects && filteredChosenProjects.length === 0) ||
      !filteredChosenProjects
    ) {
      return <p>You have not chosen any projects yet!</p>;
    } else if (filteredChosenProjects && filteredChosenProjects.length > 0) {
      return filteredChosenProjects.map(project => {
        return (
          <>
            <div key={`wish-${project.id}`} className="ProjectCard">
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
          </>
        );
      });
    }
  };

  // useEffect(() => {
  //   getChosenProjects();
  //   console.log('chosen projects', chosenProjects);
  // }, []);

  // const showChoices = () => {
  //   console.log(chosenProjects);
  //   if ((chosenProjects && chosenProjects.length === 0) || !chosenProjects) {
  //     return <p>You have not chosen any projects yet!</p>;
  //   } else if (chosenProjects && chosenProjects.length > 0) {
  //     return chosenProjects.map(project => {
  //       return (
  //         <>
  //           <div key={`wish-${project.id}`} className="ProjectCard">
  //             <Card>
  //               <CardBody>
  //                 <Flex>
  //                   <Stack spacing="7">
  //                     <Heading size="md">{project.challengeName}</Heading>
  //                     <Text fontSize="md">{project.challengeDescription}</Text>
  //                   </Stack>
  //                   <Spacer />
  //                   <Stack>
  //                     <Link to={`${project.id}`}>
  //                       <Button>
  //                         <ViewIcon mr={2} />
  //                         View more
  //                       </Button>
  //                     </Link>
  //                   </Stack>
  //                 </Flex>
  //               </CardBody>
  //             </Card>
  //           </div>
  //         </>
  //       );
  //     });
  //   }
  // };

  return (
    <div className="WishList">
      <Heading as="h2" size="md" my={17}>
        My choices
      </Heading>
      {projects && getChosenProjects()}
    </div>
  );
}

export default WishList;
