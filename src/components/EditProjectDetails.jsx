import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditProjectDetails({ edited, setEdited }) {
  const { projectId } = useParams();

  // const [companyId, setCompanyId] = useState(Number(userType));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [videoSubmission, setVideoSubmission] = useState('');

  const getSingleProject = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`
      );
      setName(response.data.stakeholders[0].name);
      setEmail(response.data.stakeholders[0].email);
      setChallengeName(response.data.challengeName);
      setChallengeDescription(response.data.challengeDescription);
      setVideoSubmission(response.data.videoSubmission);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const stakeholders = [
        {
          name: name,
          email: email,
        },
      ];

      const requestBody = {
        stakeholders,
        challengeName,
        challengeDescription,
        videoSubmission,
      };

      await axios.put(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}`,
        requestBody
      );

      setEdited(!edited);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='AddProject'>
      <h2>Add Project</h2>
      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor='challengeName'>Challenge Name:</label>
        <input
          type='text'
          name='challengeName'
          id='challengeName'
          onChange={e => setChallengeName(e.target.value)}
          value={challengeName}
          required
        />
        <label htmlFor='challengeDescription'>Challenge Description</label>
        <textarea
          name='challengeDescription'
          id='challengeDescription'
          cols='30'
          rows='10'
          onChange={e => setChallengeDescription(e.target.value)}
          value={challengeDescription}
          required
        ></textarea>
        <label htmlFor='videoSubmission'>Video URL:</label>
        <input
          type='url'
          name='videoSubmission'
          id='videoSubmission'
          onChange={e => setVideoSubmission(e.target.value)}
          value={videoSubmission}
          required
        />

        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
}

export default EditProjectDetails;
