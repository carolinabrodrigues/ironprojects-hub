import ProjectsList from '../components/ProjectsList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
  const [user, setUser] = useState(null);
  // to be used on projects list & details
  const [submitted, setSubmitted] = useState(false);
  const [adding, setAdding] = useState(false);

  const { userType } = useParams();
  console.log(userType);

  // to get the user name - if it's company or student - NOT FINISHED
  const getUser = async () => {
    if (+userType < 100) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/companies/${userType}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    } else if (+userType > 500) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/students/${userType}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [userType]);

  return (
    <div>
      {user && <h1>Welcome, {user.name}</h1>}
      {user && +userType < 100 && (
        <>
          <h3>Company Profile</h3>
          <p>Company: {user.name}</p>
          <p>Website: {user.website}</p>
          <p>User: {user.userName}</p>
          <p>Email: {user.userEmail}</p>
        </>
      )}
      <ProjectsList
        userType={userType}
        submitted={submitted}
        setSubmitted={setSubmitted}
        adding={adding}
        setAdding={setAdding}
      />
    </div>
  );
}

export default User;
