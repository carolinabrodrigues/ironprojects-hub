import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/company'>
        <button>Company</button>
      </Link>
      <Link to='/student'>
        <button>Student</button>
      </Link>
    </nav>
  );
}

export default Navbar;
