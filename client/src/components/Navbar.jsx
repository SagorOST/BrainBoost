import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="BrainBoost Logo" />
        <h2>BrainBoost</h2>
      </div>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}