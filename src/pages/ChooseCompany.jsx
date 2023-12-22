import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ChooseCompany() {
  const [companies, setCompanies] = useState(null);

  const getCompanies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/companies`
      );
      setCompanies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <>
      {companies &&
        companies.map(company => {
          return (
            <Link key={company.id} to={`/company/${company.id}`}>
              <button>{company.name}</button>;
            </Link>
          );
        })}
    </>
  );
}

export default ChooseCompany;
