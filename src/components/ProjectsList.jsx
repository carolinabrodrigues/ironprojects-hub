import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProjectsList({ userType }) {
  const [projects, setProjects] = useState([]);

  console.log(userType); // -> undefined

  const getProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects`
      );
      // console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className='ProjectsList'>
      <h1>Your Projects</h1>
      {projects.map(project => {
        return (
          <div key={project.id} className='ProjectCard'>
            <h2>{project.challengeName}</h2>
            <p>{project.challengeDescription}</p>
            <Link to={`${userType}/projects/${project.id}`}>
              <button>View more details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
