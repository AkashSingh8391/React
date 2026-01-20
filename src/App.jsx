import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
