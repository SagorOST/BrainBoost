import { Link } from "react-router-dom";
import { FaBrain, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <FaBrain />
            <span>BrainBoost</span>
          </Link>

          <p>
            Learn smarter. Practice better. Achieve more.
            BrainBoost makes learning interactive and enjoyable.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/">Categories</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Features</h3>
          <Link to="/">Quizzes</Link>
          <Link to="/">AI Assistant</Link>
          <Link to="/">Leaderboard</Link>
          <Link to="/">Progress</Link>
        </div>

        <div className="footer-column">
          <h3>Get Started</h3>
          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/">Explore Quizzes</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BrainBoost. All rights reserved.</p>
        <p>Built for smarter learning.</p>
      </div>
    </footer>
  );
}