import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsList from './components/ProjectsList';
// import ChooseCompany from './pages/ChooseCompany';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userType/projects" element={<ProjectsList />} />
        <Route
          path="/:userType/projects/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
