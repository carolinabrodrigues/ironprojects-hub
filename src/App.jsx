import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { extendTheme } from "@chakra-ui/react"


import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import User from './pages/User';
import HowItWorks from './pages/HowItWorks';
import ErrorPage from './pages/ErrorPage';

// insert handle interest logic to pass to user & project details

function App() {
  const [matches, setMatches] = useState([]);

  const location = useLocation()

  // useEffect(() => {
  //   getMatches();
  // }, [location]);
  
  // we need the matches here because they are used in the wishlist too

  // QUESTION: do we need the changeInterest?
  // either way, we're still passing it until the Interest Button
  // const [changeInterest, setChangeInterest] = useState([]);

  // States we don't need anymore:
  // const [match, setMatch] = useState(null);
  // const [foundMatchId, setFoundMatchId] = useState(null);

  // ALL OF THESE FUNCTIONS ARE NOT USED ANYMORE

  /* const getMatches = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projectsStudents`
      );

      setMatches(response.data);
    } catch (error) {
      console.log(error);
    }
  }; */

  /*  useEffect(() => {
    getMatches();
  }, [match]); */

  /* const defineMatch = (project, user) => {
    const foundMatch = matches.find(match => {
      return match.projectId === +project && match.studentId === +user;
    });
    if (foundMatch) {
      setFoundMatchId(foundMatch.id);
      setMatch(true);
    } else {
      setMatch(false);
    }
  }; */

  /* const handleInterest = async (project, user) => {
    if (!match && match !== null) {
      try {
        const requestBody = {
          projectId: +project,
          studentId: +user,
        };

        await axios.post(
          `${import.meta.env.VITE_API_URL}/projectsStudents`,
          requestBody
        );

        setMatch(!match);
      } catch (error) {
        console.log(error);
      }
    } else if (match && match !== null) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/projectsStudents/${foundMatchId}`
        );

        setMatch(!match);
      } catch (error) {
        console.log(error);
      }
    }
  }; */



  return (
    <div className='App'>
      <Navbar location={location}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/:userType/projects'
          element={<User matches={matches} setMatches={setMatches} />}
        />
        <Route
          path='/:userType/projects/:projectId'
          element={<ProjectDetails matches={matches} setMatches={setMatches} />}
        />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
