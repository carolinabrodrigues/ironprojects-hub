import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import User from './pages/User';

// insert handle interest logic to pass to user & project details

function App() {
  const [matches, setMatches] = useState([]);
  const [changeInterest, setChangeInterest] = useState(false);
  const [match, setMatch] = useState(null);
  const [foundMatchId, setFoundMatchId] = useState(null);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/:userType/projects'
          element={
            <User
              setMatches={setMatches}
              changeInterest={changeInterest}
              setChangeInterest={setChangeInterest}
              match={match}
              setMatch={setMatch}
              foundMatchId={foundMatchId}
              setFoundMatchId={setFoundMatchId}
            />
          }
        />
        <Route
          path='/:userType/projects/:projectId'
          element={
            <ProjectDetails
              setMatches={setMatches}
              changeInterest={changeInterest}
              setChangeInterest={setChangeInterest}
              match={match}
              setMatch={setMatch}
              foundMatchId={foundMatchId}
              setFoundMatchId={setFoundMatchId}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
