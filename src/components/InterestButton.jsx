/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { AddIcon, CloseIcon } from '@chakra-ui/icons';

function InterestButton({ projectId, userType, setMatches }) {
  const [foundMatch, setFoundMatch] = useState(null);
  const [changeInterest, setChangeInterest] = useState(false);
  const [changeMatch, setChangeMatch] = useState(null);

  const checkMatches = (project, user, matchesArray) => {
    const match = matchesArray.find(match => {
      return match.projectId === +project && match.studentId === +user;
    });

    if (match) {
      setFoundMatch(match);
      setChangeMatch(true);
    } else {
      setChangeMatch(false);
      setFoundMatch(match);
    }
  };

  const handleInterestButton = async () => {
    if (!changeMatch && changeMatch !== null) {
      try {
        const requestBody = { projectId: projectId, studentId: userType };

        await axios.post(
          `${import.meta.env.VITE_API_URL}/projectsStudents`,
          requestBody
        );
        console.log('posting');

        setChangeMatch(!changeMatch);
      } catch (error) {
        console.log(error);
      }
    } else if (changeMatch && changeMatch !== null) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/projectsStudents/${foundMatch.id}`
        );
        console.log('deleting');
        setChangeMatch(!changeMatch);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getMatches = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projectsStudents`
      );

      setMatches(response.data);
      console.log('matches API:', response.data);

      checkMatches(projectId, userType, response.data);
      console.log('project id:', projectId, 'user:', userType);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
    return () => {
      setFoundMatch(null);
    };
  }, [changeMatch, userType]);

  useEffect(() => {
    handleInterestButton();
  }, [changeInterest]);

  return (
    <Button
      onClick={() => setChangeInterest(!changeInterest)}
      className="SolidButton"
      variant="solid"
      size="md"
    >
      {foundMatch && foundMatch !== null ? 'Remove Interest' : 'Show Interest'}
    </Button>
  );
}
export default InterestButton;
