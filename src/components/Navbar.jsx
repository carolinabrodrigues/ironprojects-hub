import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/2/projects">
        <button>Company</button>
      </Link>
      <Link to="/student/projects">
        <button>Student</button>
      </Link>
    </nav>
  );
}

export default Navbar;
