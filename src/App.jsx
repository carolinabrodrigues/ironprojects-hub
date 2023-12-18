import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Student from './pages/Student';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsList from './components/ProjectsList';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/student' element={<Student />} />
        <Route path='/:userType/projects' element={<ProjectsList />} />
        {/* <Route
          path='/company/projects/:projectId'
          element={<ProjectDetails />}
        />
        <Route
          path='/student/projects/:projectId'
          element={<ProjectDetails />}
        /> */}
        <Route
          path='/:userType/projects/:projectId'
          element={<ProjectDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
