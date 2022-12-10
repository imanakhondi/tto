import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/Provider/UserProvider/AuthrProvider";
import NewUser from "./pages/NewUser";
import Shareholders from "./pages/Shareholders";
import UserList from "./pages/UserList";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import MasterPage from "./pages/MasterPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  


  return (
    <AuthProvider>
      <div className="bg-[#f5f6ff] font-IRANSansWeb font-IRANSansWeb_FaNum">
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin" element={<MasterPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UserList />} />
            <Route path="newuser" element={<NewUser />} />
            <Route path="shareholders" element={<Shareholders />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
