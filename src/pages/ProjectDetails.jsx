import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const [project, setProject] = useState(null);

  const { projectId, userType } = useParams();

  const getSingleProject = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );

      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, [projectId]);

  return (
    <div className="ProjectDetails">
      {+userType > 500 && <button>Show Interest</button>}
      {+userType < 100 && <button>Edit Project</button>}
      {project && (
        <>
          <h1>{project.challengeName}</h1>
          <p>{project.challengeDescription}</p>
          {project.stakeholders.map(stakeholder => {
            return (
              <div key={project.id} className="stakeholder-info">
                <p>{stakeholder.name}</p>
                <p>{stakeholder.email}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProjectDetails;
