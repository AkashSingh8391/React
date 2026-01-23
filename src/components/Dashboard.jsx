import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link> |{" "}
      <Link to="settings">Settings</Link>

      <hr />

      {/* 🔽 Child routes render here */}
      <Outlet />
    </>
  );
}

export default Dashboard;
