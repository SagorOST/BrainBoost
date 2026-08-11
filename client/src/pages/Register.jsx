import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import "../styles/Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Terms check
    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    // Get existing users
    const existingUsers =
      JSON.parse(localStorage.getItem("brainboostUsers")) || [];

    // Check if email already exists
    const userExists = existingUsers.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      setError("An account with this email already exists!");
      return;
    }

    // Create new user
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    // Save user
    localStorage.setItem(
      "brainboostUsers",
      JSON.stringify([...existingUsers, newUser])
    );

    setSuccess("Account created successfully! Redirecting to login...");

    // Go to login after 1.5 seconds
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* LOGO */}
        <div className="auth-logo">
          <FaBrain />
          <span>BrainBoost</span>
        </div>

        {/* HEADER */}
        <div className="auth-header">
          <h1>Create Account 🚀</h1>

          <p>
            Start your smarter learning journey today.
          </p>
        </div>

        {/* FORM */}
        <form className="auth-form" onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="input-group">
            <label>Full Name</label>

            <div className="input-wrapper">
              <FaUser />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
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
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) =>
                setAgreeTerms(e.target.checked)
              }
            />

            <span>
              I agree to the Terms & Conditions
            </span>
          </label>

          {/* ERROR MESSAGE */}
          {error && (
            <p
              style={{
                color: "#ff5c5c",
                textAlign: "center",
                margin: "0",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <p
              style={{
                color: "#22c55e",
                textAlign: "center",
                margin: "0",
                fontSize: "14px",
              }}
            >
              {success}
            </p>
          )}

          {/* REGISTER */}
          <button
            type="submit"
            className="auth-submit"
          >
            Create Account
          </button>

        </form>

        {/* LOGIN LINK */}
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