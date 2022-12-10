import { useState } from "react";
import {
  MdExpandMore,
  MdGroups,
  MdPeople,
  MdPersonAddAlt1,
  MdPowerSettingsNew,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../Provider/UserProvider/AuthrProvider";

const Sidebar = () => {
  const auth= useAuth();
  const setAuth=useAuthActions();
  const navigate= useNavigate();
  const logOutHandler=()=>{
if(auth){
  localStorage.removeItem('auth');
  setAuth(false);
  navigate("/login");
}
  }
  const menuItems = [
    {
      title: "داشبورد",
      to: "dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      title: "کاربران",
      icon: <MdPeople />,
      iconTwo: <MdExpandMore size={25} />,
      submenu: [
        { title: "همه کاربران", icon: <MdPeople />, to: "users" },
        { title: "افزودن", icon: <MdPersonAddAlt1 />, to: "newuser" },
      ],
    },
    {
      title: "سهام دارن",
      icon: <MdGroups />,
      to: "shareholders",
    },
  ];

  return (
    <div className="flex-1 h-[calc(100vh-60px)] bg-[#ffffff] sticky top-[60px] shadow-[0_12px_30px_rgb(80,143,244,0.1)] ">
      <div className="p-5 text-[#8890b5]">
        <div className="mb-2">
          <ul>
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
          <button className="flex items-center justify-between cursor-pointer  mb-5" onClick={logOutHandler}>
            <div className="flex gap-4">
              <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
                <MdPowerSettingsNew />
              </div>
              <span>خروج</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

export const MenuItems = ({ items, index }) => {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      {items.submenu ? (
        <>
          <div
            className="flex items-center justify-between cursor-pointer  mb-5"
            aria-expanded={subMenu ? "true" : "false"}
            onClick={() => {
              setSubMenu(!subMenu);
            }}
          >
            <div className="flex gap-4">
              <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
                {items.icon}
              </div>
              <span>{items.title}</span>
            </div>
            {items.iconTwo}
          </div>

          <Dropdown submenus={items.submenu} dropdown={subMenu} />
        </>
      ) : (
        <NavLink to={items.to} className="flex flex-col" key={index}>
          <div className="flex items-center justify-between cursor-pointer  mb-5">
            <div className="flex gap-4">
              <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
                {items.icon}
              </div>
              <span>{items.title}</span>
            </div>
            {items.iconTwo}
          </div>
        </NavLink>
      )}
    </>
  );
};

export const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`mr-5 ${dropdown ? "h-auto" : "h-0 overflow-hidden"} `}>
      {submenus.map((submenu, index) => (
        <Link to={submenu.to} className="flex flex-col" key={index}>
          <div className="flex items-center justify-between cursor-pointer  mb-5">
            <div className="flex gap-4">
              <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
                {submenu.icon}
              </div>
              <span>{submenu.title}</span>
            </div>
            {submenu.iconTwo}
          </div>
        </Link>
      ))}
    </ul>
  );
};

