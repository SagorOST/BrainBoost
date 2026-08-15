import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <img src={logo} alt="BrainBoost Logo" />
          <span>BrainBoost</span>
        </Link>

        <ul className="nav-menu">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#categories">Categories</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <div className="nav-buttons">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="signup-btn">
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}