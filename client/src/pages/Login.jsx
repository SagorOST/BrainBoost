import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/Auth.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <FaBrain />
          <span>BrainBoost</span>
        </div>

        <div className="auth-header">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue your learning journey.
          </p>
        </div>

        <form className="auth-form">

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <FaEnvelope />

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="auth-options">

            <label className="remember">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          <button type="submit" className="auth-submit">
            Login
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>

      </div>
    </div>
  );
}