import Duffy from "../images/duffy.png";
import { FaGithub } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ page, setPage }) {
  function visitPage(value) {
    setPage(value);
    localStorage.setItem("duffy-page-number", value);
  }

  return (
    <div className="navbar">
      <div className="navbar-image-container">
        <img src={Duffy} alt="duffy" />
        <div className="nav-separator"></div>
        <h1>Duffy Portfolio</h1>
      </div>

      {/* Navigation items */}
      <div className="navbar-container">
        <button
          onClick={() => visitPage(0)}
          className={page === 0 && "active-nav-button"}>
          Home
        </button>
        <button
          onClick={() => visitPage(1)}
          className={page === 1 && "active-nav-button"}>
          About Me
        </button>
        <button
          onClick={() => visitPage(2)}
          className={page === 2 && "active-nav-button"}>
          What I Do
        </button>
        <button
          onClick={() => visitPage(3)}
          className={page === 3 && "active-nav-button"}>
          Resume
        </button>
        <button
          onClick={() => visitPage(4)}
          className={page === 4 && "active-nav-button"}>
          Portfolio
        </button>
        <button
          onClick={() => visitPage(5)}
          className={page === 5 && "active-nav-button"}>
          Contact
        </button>
      </div>
      {/* End of Navigation items */}
      <div className="navbar-bottom">
        <FaGithub />
      </div>
    </div>
  );
}
