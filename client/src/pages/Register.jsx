import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import "../styles/Auth.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <FaBrain />
          <span>BrainBoost</span>
        </div>

        <div className="auth-header">
          <h1>Create Account 🚀</h1>

          <p>
            Start your smarter learning journey today.
          </p>
        </div>

        <form className="auth-form">

          {/* NAME */}
          <div className="input-group">
            <label>Full Name</label>

            <div className="input-wrapper">
              <FaUser />

              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* EMAIL */}
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

          {/* PASSWORD */}
          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="input-group">
            <label>Confirm Password</label>

            <div className="input-wrapper">
              <FaLock />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* TERMS */}
          <label className="remember">
            <input type="checkbox" required />

            <span>
              I agree to the Terms & Conditions
            </span>
          </label>

          {/* REGISTER */}
          <button
            type="submit"
            className="auth-submit"
          >
            Create Account
          </button>

        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}