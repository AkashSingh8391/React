import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import User from "./components/User";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Route */}
        <Route path="/user/:id" element={<User />} />

        {/* Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h3>Welcome to Dashboard</h3>} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
