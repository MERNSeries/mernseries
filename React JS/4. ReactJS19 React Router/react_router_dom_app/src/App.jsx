/* eslint-disable react/prop-types */
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";
import "./App.css";
// import Settings from "./components/Settings";
// import Profile from "./components/Profile";
import Login from "./components/Login";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  const isAuthenticated = true;
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/user/123">User Profile</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
