import { useState } from "react";
import {
  MdExpandMore,
  MdGroups,
  MdPeople,
  MdPersonAddAlt1,
  MdPowerSettingsNew,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      title: "داشبورد",
      to: "/",
      icon: <MdSpaceDashboard />,
    },
    {
      title: "کاربران",
      icon: <MdPeople />,
      iconTwo: <MdExpandMore size={25} />,
      submenu: [
        { title: "همه کاربران", icon: <MdPeople />, to: "/users" },
        { title: "افزودن", icon: <MdPersonAddAlt1 />,to:"/newuser" },
      ],
    },
    {
      title: "سهام دارن",
      icon: <MdGroups />,
      to:"shareholders",
    },
    {
      title: "خروج",
      icon: <MdPowerSettingsNew />,
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

// export const Li = ({ name, icon, onClick, more }) => {
//   return (
//     <li className="flex flex-col" onClick={onClick}>
//       <div className="flex items-center justify-between cursor-pointer  mb-5">
//         <div className="flex gap-4">
//           <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//             {icon}
//           </div>
//           <span>{name}</span>
//         </div>
//         {more}
//       </div>
//     </li>
//   );
// };

//  {menuItems.map((item) => (
//               <NavLink to={item.to}>
//                 <li className="flex flex-col">
//                   <div className="flex items-center justify-between cursor-pointer  mb-5">
//                     <div className="flex gap-4">
//                       <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                         {item.icon}
//                       </div>
//                       <span>{item.title}</span>
//                     </div>
//                     {item.iconTwo}
//                   </div>
//                 </li>
//               </NavLink>
//             ))}
//             <Link to="/">
//            <li className="flex items-center gap-4 cursor-pointer mb-5">
//                 <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                   <MdSpaceDashboard />
//                 </div>
//                 <span>کاربران</span>
//               </li>
//               <Li name="داشبورد" icon={<MdSpaceDashboard />} />
//             </Link>
//             <Li
//               name="کاربران"
//               icon={<MdPeople />}
//               more={<MdExpandMore size={25} />}
//               onClick={() => setSubMenu(!subMenu)}
//             />
//          <li className="flex flex-col" onClick={() => setSubMenu(!subMenu)}>
//               <div className="flex items-center justify-between cursor-pointer  mb-5">
//                 <div className="flex gap-4">
//                   <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                     <MdPeople />
//                   </div>
//                   <span>کاربران</span>
//                 </div>
//                 <MdExpandMore size={25} />
//               </div>
//             </li>
//             <ul className={`mr-5 ${subMenu ? "h-auto" : "hidden"}`}>
//               <Link to="users">
//                 <Li name="همه کاربران" icon={<MdPeople />} />
//               <li className="flex items-center gap-4 cursor-pointer mb-5">
//                   <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                     <MdPeople />
//                   </div>
//                   <span>همه کاربران</span>
//                 </li>
//               </Link>
//               <Li name="افزودن" icon={<MdPersonAddAlt1 />} />
//           <li className="flex items-center gap-4 cursor-pointer mb-5">
//                 <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                 <MdPersonAddAlt1 />
//                 </div>
//                 <span>افزودن</span>
//               </li>
//             </ul>
//             <Li name="سهام داران" icon={<MdGroups />} />
//             <li className="flex items-center gap-4 cursor-pointer mb-5">
//               <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                 <MdGroups />
//               </div>
//               <span>سهام داران</span>
//             </li>
//             <Li name="خروج" icon={<MdPowerSettingsNew />} />
//             <li className="flex items-center gap-4 cursor-pointer mb-5">
//               <div className=" w-8 h-8 rounded-1 flex items-center justify-center shadow-[0_3px_6px_rgb(83,108,167,0.16);]">
//                 <MdPowerSettingsNew />
//               </div>
//               <span>خروج</span>
//             </li>
