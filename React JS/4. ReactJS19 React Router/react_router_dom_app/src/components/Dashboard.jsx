import { NavLink, Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <nav>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Dashboard;
