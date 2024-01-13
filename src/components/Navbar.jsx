import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <button>LOGO</button>
      </Link>
      {/* <Link to='/'>
        <button>How it works</button>
      </Link> */}
      <Link to='/2/projects'>
        <button>Company</button>
      </Link>
      <Link to='/501/projects'>
        <button>Student</button>
      </Link>
    </nav>
  );
}

export default Navbar;
