// import * as React from "react";
import avatar from "../images/account-icon.jpg";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/getUserService";
import { Link } from "react-router-dom";
import { deleteUser } from "../services/deletaUserService";
import {MdModeEdit,MdDeleteOutline} from "react-icons/md"



const UserList = () => {
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
      field: "isAdmin",
      headerName: "وضعیت",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="flex items-center " >
            <Link to={`/user/${params.row.id}`}>
            <MdModeEdit className=" text-green-500 w-6 h-6 cursor-pointer" />
            </Link>
            <MdDeleteOutline className="text-red-500 w-6 h-6 cursor-pointer mr-5" onClick={()=>deleteHandler(params.row._id)} />
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
  console.log(rows);
  const deleteHandler= (id) => {
    console.log(id);
    deleteUser(id).then(res=>setRows(res.data)).catch(error => console.log(error))
    }

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

export default UserList;
