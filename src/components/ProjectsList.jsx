import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import AddProject from './AddProject';

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  const { userType } = useParams();

  console.log(userType); // -> undefined

  const getProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const showProjects = user => {
    const filteredProjects = projects.filter(
      project => project.companyId === +user
    );
    if (user === 'student') {
      return projects.map(project => {
        return (
          <div key={project.id} className="ProjectCard">
            <h2>{project.challengeName}</h2>
            <p>{project.challengeDescription}</p>
            <Link to={`${project.id}`}>
              <button>View more details</button>
            </Link>
          </div>
        );
      });
    } else if (user !== 'student' && filteredProjects.length > 0) {
      return filteredProjects.map(project => {
        return (
          <div key={project.id} className="ProjectCard">
            <h2>{project.challengeName}</h2>
            <p>{project.challengeDescription}</p>
            <Link to={`${project.id}`}>
              <button>View more details</button>
            </Link>
          </div>
        );
      });
    } else {
      return <AddProject />;
    }
  };

  return (
    <div className="ProjectsList">
      <h1>Your Projects</h1>
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.length > 0 && showProjects(userType)}
    </div>
  );
}

export default ProjectsList;
