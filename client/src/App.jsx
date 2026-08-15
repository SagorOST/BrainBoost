import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AuthorDashboard from "./pages/AuthorDashboard";
import CreateQuiz from "./pages/CreateQuiz";
import EditQuiz from "./pages/EditQuiz";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/author/dashboard"
              element={<AuthorDashboard />}
            />

            <Route
              path="/author/create-quiz"
              element={<CreateQuiz />}
            />

            {/* Edit Quiz */}
            <Route
              path="/author/edit-quiz/:id"
              element={<EditQuiz />}
            />

            <Route
              path="/quiz/:id"
              element={<Quiz />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}