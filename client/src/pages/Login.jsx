import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBrain, FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Get registered users
    const users =
      JSON.parse(localStorage.getItem("brainboostUsers")) || [];

    // Find user
    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    // If user not found
    if (!user) {
      setError("Invalid email or password!");
      return;
    }

    // Save logged-in user
    localStorage.setItem(
      "brainboostCurrentUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      })
    );

    // Remember Me
    if (rememberMe) {
      localStorage.setItem("brainboostRememberMe", "true");
    } else {
      localStorage.removeItem("brainboostRememberMe");
    }

    // Login successful
    navigate("/");
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
          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue your learning journey.
          </p>
        </div>

        {/* FORM */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

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
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="auth-options">

            <label className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span>Remember Me</span>
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          {/* ERROR */}
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

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="auth-submit"
          >
            Login
          </button>

        </form>

        {/* REGISTER LINK */}
        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}