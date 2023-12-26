import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Student from './pages/Student';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsList from './components/ProjectsList';
import ChooseCompany from './pages/ChooseCompany';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* user type - consoante empresa ou estudante renders entire page */}
        {/* <Route path="/company" element={<ChooseCompany />} />
        <Route path="/student" element={<Student />} />
        <Route path="/company/:companyId" element={<Company />} /> */}
        {/* projectsList não é uma página, é um componente rendered dentro de uma página */}
        <Route path='/:userType/projects' element={<ProjectsList />} />
        <Route
          path='/:userType/projects/:projectId'
          element={<ProjectDetails />}
        />
        {/* 
        <Route
          path='/student/projects/:projectId'
          element={<ProjectDetails />}
        /> */}
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
