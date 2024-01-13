import ProjectsList from '../components/ProjectsList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
  const [company, setCompany] = useState(null);
  const [student, setStudent] = useState(null);

  const { userType } = useParams();

  // to get the user name - if it's company or student - NOT FINISHED
  const getCompany = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/companies/${userType}`
      );
      setCompany(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudent = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/students/${userType}`
      );
      setStudent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, [userType]);

  useEffect(() => {
    getCompany();
  }, [userType]);

  const welcomeUserMessage = user => {
    if (+user < 100) return <h1>Welcome, {company.name}</h1>;
    if (+user > 500) return <h1>Welcome, {student.name}</h1>;
  };

  return (
    <div>
      {welcomeUserMessage}
      {+userType < 100 && (
        <>
          <p>Company: {company.name}</p>
          <p>Website: {company.website}</p>
          <p>User: {company.userName}</p>
          <p>Email: {company.userEmail}</p>
        </>
      )}
      <ProjectsList userType={userType} />
    </div>
  );
}

export default User;
