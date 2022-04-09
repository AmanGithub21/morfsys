import HamburgerIcon from "./HamburgerIcon";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <HamburgerIcon />

      <img
        src="https://assets.turbologo.com/blog/en/2019/10/19084944/youtube-logo-illustration-958x575.jpg"
        alt="Image"
        width="40px"
        height="40px"
        style={{ borderRadius: "100%", border: "2px black solid" }}
      />
      <div className="highlight">
        <a href="" className="navbar-brand brand-name">
          Shecnzchen Henho Academy
        </a>
        <div className="nav-buttons">
          <button>DISCOVER</button>
          <button>IMPACT BOARD</button>
          <button>LEARNING PODS</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
