import ProjectsList from '../components/ProjectsList';
import { useParams } from 'react-router-dom';

function Student() {
  const { userType } = useParams();

  return (
    <div className='StudentPage'>
      <h2>Welcome, Student!</h2>
      <ProjectsList userType={userType} />
    </div>
  );
}

export default Student;
