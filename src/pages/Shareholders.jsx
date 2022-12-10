import { useAuth } from "../components/Provider/UserProvider/AuthrProvider";

// const Shareholders = () => {

//     // const rows = [
//     //     {
//     //       id: 1,
//     //       name: "ایمان",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 2,
//     //       name: "کسرا",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 3,
//     //       name: "دریا",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 4,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 5,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 6,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 7,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 8,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 9,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //     {
//     //       id: 10,
//     //       name: "دریا آخوندی",
//     //       image: avatar,
//     //       lastName: "آخوندی",
//     //       email: "akhondiiman@gmail.com",
//     //       mobile: 9153297600,
//     //       status: "تایید شده",
//     //     },
//     //   ];

//   const users = [
//     {
//       id: 1,
//       name: "ایمان",
//       email: "akhondiiman@gmail.com",
//       phone: 9153297600,
//       status: "تایید شده",
//     },
//     {
//       id: 2,
//       name: "کسرا",
//       email: "akhondiiman@gmail.com",
//       phone: 9153297600,
//       status: "تایید شده",
//     },
//     {
//       id: 3,
//       name: "دریا",
//       email: "akhondiiman@gmail.com",
//       phone: 9153297600,
//       status: "تایید شده",
//     },
//     {
//       id: 4,
//       name: "دریا آخوندی",
//       email: "akhondiiman@gmail.com",
//       phone: 9153297600,
//       status: "تایید شده",
//     },{
//         id: 5,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },{
//         id: 6,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },{
//         id: 7,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },{
//         id: 8,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },{
//         id: 9,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },{
//         id: 10,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },
//       {
//         id: 1,
//         name: "ایمان",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },
//       {
//         id: 2,
//         name: "کسرا",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },
//       {
//         id: 3,
//         name: "دریا",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },
//       {
//         id: 4,
//         name: "دریا آخوندی",
//         email: "akhondiiman@gmail.com",
//         phone: 9153297600,
//         status: "تایید شده",
//       },{
//           id: 5,
//           name: "دریا آخوندی",
//           email: "akhondiiman@gmail.com",
//           phone: 9153297600,
//           status: "تایید شده",
//         },{
//           id: 6,
//           name: "دریا آخوندی",
//           email: "akhondiiman@gmail.com",
//           phone: 9153297600,
//           status: "تایید شده",
//         },{
//           id: 7,
//           name: "دریا آخوندی",
//           email: "akhondiiman@gmail.com",
//           phone: 9153297600,
//           status: "تایید شده",
//         },{
//           id: 8,
//           name: "دریا آخوندی",
//           email: "akhondiiman@gmail.com",
//           phone: 9153297600,
//           status: "تایید شده",
//         },{
//           id: 9,
//           name: "دریا آخوندی",
//           email: "akhondiiman@gmail.com",
//           phone: 9153297600,
//           status: "تایید شده",
//         },{
//           id: 10,
//           name: "دریا آخوندی",
//           email: "akhondiiman@gmail.com",
//           phone: 9153297600,
//           status: "تایید شده",
//         },

//   ];
//   return (
//     <div className="flex-[6]">
//       <div className="p-5">
//         <table className="w-full text-center text-gray-500 table-auto">
//           <tr className=" border h-12">
//             <th>id</th>
//             <th>نام</th>
//             <th>موبایل</th>
//             <th>ایمیل</th>
//             <th>وضعیت</th>
//           </tr>
//           {users.map((user) => (
//             <tr className=" border h-12">
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.status}</td>
//             </tr>
//           ))}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Shareholders;

// const rows = [
//   {
//     id: 1,
//     name: "ایمان آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 2,
//     name: "کسرا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 3,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 4,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 5,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 6,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 7,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 8,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 9,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
//   {
//     id: 10,
//     name: "دریا آخوندی",
//     image: avatar,
//    email: "akhondiiman@gmail.com",
//     mobile: 9153297600,
//     status: "تایید شده",
//   },
// ];

import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import avatar from "../images/account-icon.jpg";
import { getAllUsers } from "../services/getUserService";
import { Link } from "react-router-dom";
import { deleteUser } from "../services/deletaUserService";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";

const Shareholders = () => {
  // const [confirm, setConfirm] = useState("تایید نشده");
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "نام",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center ">
            <img
              src={params.row.image}
              alt=""
              className="w-10 h-10 rounded-full ml-2 object-cover "
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "phoneNumber",
      headerName: "موبایل",
      width: 200,
    },
    {
      field: "action",
      headerName: "وضعیت",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="flex items-center ">
            <button
              className="text-white px-2 py-1 rounded cursor-pointer bg-red-500 "
              onClick={(e) => confirmHandler(e,params.row._id)}
            >
              تائید نشده
            </button>
          </div>
        );
      },
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((res) => setRows(res.data))
      .catch((error) => console.log(error));
  }, []);
  const confirmHandler = (event,id) => {

    event.currentTarget.classList.remove('bg-red-500');
    event.currentTarget.classList.add('bg-green-500');
    event.currentTarget.textContent="تائید شده"

  };

  if (!rows.length) return <p>fetching data failed!!!</p>;

  return (
    <div className="flex-[6]  ">
      <div className="p-5 h-full w-full ">
        <DataGrid
          className="!font-IRANSansWeb_FaNum "
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
};

export default Shareholders;
