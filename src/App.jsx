import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import User from './pages/User';
import HowItWorks from './pages/HowItWorks';
import ErrorPage from './pages/ErrorPage';

// insert handle interest logic to pass to user & project details

function App() {
  const [matches, setMatches] = useState([]);
  const [changeInterest, setChangeInterest] = useState(false);
  const [match, setMatch] = useState(null);
  const [foundMatchId, setFoundMatchId] = useState(null);

  const getMatch = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projectsStudents`
      );

      setMatches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const defineMatch = (project, user) => {
    const foundMatch = matches.find(match => {
      return match.projectId === +project && match.studentId === +user;
    });
    if (foundMatch) {
      setFoundMatchId(foundMatch.id);
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  useEffect(() => {
    getMatch();
  }, [match]);

  const handleInterest = async (project, user) => {
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
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:userType/projects"
          element={
            <User
              changeInterest={changeInterest}
              setChangeInterest={setChangeInterest}
              match={match}
              defineMatch={defineMatch}
              handleInterest={handleInterest}
              matches={matches}
              setMatches={setMatches}
              foundMatchId={foundMatchId}
              setFoundMatchId={setFoundMatchId}
            />
          }
        />
        <Route
          path="/:userType/projects/:projectId"
          element={
            <ProjectDetails
              changeInterest={changeInterest}
              setChangeInterest={setChangeInterest}
              match={match}
              setMatch={setMatch}
              defineMatch={defineMatch}
              handleInterest={handleInterest}
              matches={matches}
            />
          }
        />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
