import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/HomePage";
import NewUser from "./pages/NewUser";
import Shareholders from "./pages/Shareholders";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="bg-[#f5f6ff]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/shareholders" element={<Shareholders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
