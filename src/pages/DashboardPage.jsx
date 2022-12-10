import { useEffect, useState } from "react";
import { MdOutlineError } from "react-icons/md";
import { getAllUsers } from "../services/getUserService";

const Dashboard = () => {
  const [rows, setRows] = useState([]);


  useEffect(() => {
    getAllUsers()
      .then((res) => setRows(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex-[6] ">
      <div className="flex gap-8 p-5 flex-wrap ">
        <div className="flex-1 p-2 rounded-lg bg-[#4C6EF7] w-96 shadow-[0_0_10px_2px_rgb(80,143,244,0.23)]">
          <div className="p-2 flex items-center gap-3">
            <div className="text-white">
              <MdOutlineError size={25}/>
            </div>
            <div className="flex flex-col text-white">
              <p>تعداد سهام دار </p>
              <span>{rows.length}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 rounded-lg bg-[#4C6EF7] w-96 shadow-[0_0_10px_2px_rgb(80,143,244,0.23)]">
          <div className="p-2 flex items-center gap-3">
            <div className=" text-white">
              <MdOutlineError size={25}/>
            </div>
            <div className="flex flex-col text-white">
              <p>تعداد سهام دار </p>
              <span>{rows.length}</span>
            </div>
          </div>
        </div>  <div className="flex-1 p-2 rounded-lg bg-[#4C6EF7] w-96 shadow-[0_0_10px_2px_rgb(80,143,244,0.23)]">
          <div className="p-2 flex items-center gap-3">
            <div className="text-white">
              <MdOutlineError size={25}/>
            </div>
            <div className="flex flex-col text-white">
              <p>تعداد سهام دار </p>
              <span>{rows.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
