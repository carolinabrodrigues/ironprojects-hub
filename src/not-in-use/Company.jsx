import ProjectsList from '../components/ProjectsList';
import { useParams } from 'react-router-dom';

function Company() {
  const { companyId } = useParams();
  return (
    <div>
      <h2>Welcome, Company!</h2>
      <ProjectsList userType={companyId} />
    </div>
  );
}

export default Company;
