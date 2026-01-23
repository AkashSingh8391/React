import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/contact"><button>Contact</button></Link>
      <Link to="/dashboard"><button>Dashboard</button></Link>
      <Link to="/user/101"><button>User 101</button></Link>
    </div>
  );
}

export default Navbar;
