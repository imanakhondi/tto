import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useAuth } from "../components/Provider/UserProvider/AuthrProvider";
import Sidebar from "../components/sidebar/Sidebar";
const MasterPage = () => {
 
  const auth = useAuth();
  const navigate = useNavigate();

  const location=useLocation()

  useEffect(()=>{
    console.log(auth);
   if(location.pathname=== "/admin" && auth){
    navigate("/admin/dashboard")
   }
  },[])


  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterPage;
