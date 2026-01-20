import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

function Dashboard() {
  const { user, login, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#f4f4f4",
        color: theme === "dark" ? "#fff" : "#000",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Multiple Context Demo</h1>

      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <hr />

      {user ? (
        <>
          <h2>Welcome {user.name}</h2>
          <p>Role: {user.role}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Dashboard;
