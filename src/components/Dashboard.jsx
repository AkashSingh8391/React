import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link> |{" "}
      <Link to="setting">Setting</Link>

      <hr />

      {/* 🔽 Child routes render here */}
      <Outlet />
    </>
  );
}

export default Dashboard;
