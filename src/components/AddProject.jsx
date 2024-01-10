import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddProject({ setSubmitted, submitted }) {
  const { userType } = useParams();

  const [companyId, setCompanyId] = useState(Number(userType));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [videoSubmission, setVideoSubmission] = useState('');

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
        companyId,
        stakeholders,
        challengeName,
        challengeDescription,
        videoSubmission,
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/projects`, requestBody);

      setSubmitted(!submitted);
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

        <button type='submit'>Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
