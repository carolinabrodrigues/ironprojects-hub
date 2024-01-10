import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EditProjectDetails from '../components/EditProjectDetails';

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [edited, setEdited] = useState(true);

  const { projectId, userType } = useParams();
  const navigate = useNavigate();

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

  const deleteProject = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );
      navigate(`/${userType}/projects`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, [projectId, edited]);

  return (
    <div className='ProjectDetails'>
      {+userType > 500 && <button>Show Interest</button>}
      {+userType < 100 && (
        <>
          <button onClick={() => setEdited(!edited)}>Edit Project</button>
          <button onClick={deleteProject}>Delete Project</button>
        </>
      )}
      {project && (
        <>
          {edited && (
            <>
              <h1>{project.challengeName}</h1>
              <p>{project.challengeDescription}</p>
              {project.stakeholders.map(stakeholder => {
                return (
                  <div key={project.id} className='stakeholder-info'>
                    <p>{stakeholder.name}</p>
                    <p>{stakeholder.email}</p>
                  </div>
                );
              })}
            </>
          )}
          {!edited && (
            <EditProjectDetails edited={edited} setEdited={setEdited} />
          )}
        </>
      )}
    </div>
  );
}

export default ProjectDetails;
