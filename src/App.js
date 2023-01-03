import "./index.css";
import { FaBars, FaTwitter } from "react-icons/fa";
import logo from "./logo.svg";

function App() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          {/* we gonna use react router */}
          <ul className="links">
            <li>
              <a href="1">home</a>
            </li>
            <li>
              <a href="2">about</a>
            </li>
            <li>
              <a href="3">contact</a>
            </li>
            <li>
              <a href="4">products</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="http://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="http://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="http://twitter.com">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
