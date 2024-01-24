/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function InterestButton({ projectId, userType, matches, setMatches }) {
  const [foundMatch, setFoundMatch] = useState(null);
  const [changeInterest, setChangeInterest] = useState(false);
  const [changeMatch, setChangeMatch] = useState(null);

  // QUESTION: should we create foundMatch and newMatch as states?

  const checkMatches = (project, user, matchesArray) => {
    const match = matchesArray.find(match => {
      return match.projectId === +project && match.studentId === +user;
    });

    console.log('match inside check:', match);

    if (match) {
      setFoundMatch(match);
      setChangeMatch(true);
    } else {
      setChangeMatch(false);
      setFoundMatch(match);
    }
  };

  /* let matchesUpdated = [];
  let newMatch = {}; */

  console.log('changeMatch alone:', changeMatch);

  const handleInterestButton = async () => {
    // const isMatch = checkMatches(projectId, userType);
    // if match exists, when we click the button it deletes from the array
    /*  if (isMatch) {
      // getting an array with all elements except the match
      matchesUpdated = matches.filter(match => match.id !== foundMatch.id);
      console.log('matchesUpdated:', matchesUpdated);
    } else {
      // creating a copy of the array with the new match
      newMatch = { projectId: projectId, studentId: userType };
      matchesUpdated = [...matches, newMatch];
      console.log('matchesUpdated:', matchesUpdated);
    } */

    // by the end, updates the matches state
    // setMatches(matchesUpdated);

    console.log('before async:', changeMatch);
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

  console.log('foundMatch fora', foundMatch);
  // USE EFFECTS & API CALLS

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
  }, [changeMatch]);

  useEffect(() => {
    handleInterestButton();
  }, [changeInterest]);

  /* const updateMatches = async () => {
    if (newMatch) {
      try {
        const requestBody = newMatch;

        await axios.post(
          `${import.meta.env.VITE_API_URL}/projectsStudents`,
          requestBody
        );
      } catch (error) {
        console.log(error);
      }
    } else if (foundMatch.id) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/projectsStudents/${foundMatch.id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  }; */

  /*   useEffect(() => {
    updateMatches();
  }, [newMatch, matches]); */
  /* useEffect(() => {
    getMatches();
  }, [updateMatches]); */

  /* useEffect(() => {
    defineMatch(projectId, userType);
    // console.log(match);
    if (match) {
      setSingleMatch(true);
    } else {
      setSingleMatch(false);
    }
  }, [matches, match]);

  useEffect(() => {
    handleInterest(projectId, userType);
    setSingleMatch(!singleMatch);
  }, [changeInterest]); */

  return (
    <Button onClick={() => setChangeInterest(!changeInterest)}>
      {foundMatch ? 'Remove Interest' : 'Show Interest'}
    </Button>
  );
}
export default InterestButton;
