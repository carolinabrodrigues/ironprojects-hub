import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import User from './pages/User';
import HowItWorks from './pages/HowItWorks';
import ErrorPage from './pages/ErrorPage';

// insert handle interest logic to pass to user & project details

function App() {
  // we need the matches here because they are used in the wishlist & interest button components
  const [matches, setMatches] = useState([]);

  return (
    <div className='App'>
      <Navbar />
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
