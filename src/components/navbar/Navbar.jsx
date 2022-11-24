import logo from "../../images/logo.png";
import { MdPerson, MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import personImg from "../../images/account-icon.jpg"
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="w-full bg-[#4c6ef7] h-[60px]  sticky top-0 z-[999]">
      <div className="flex justify-between items-center h-full px-5">
        <div className=" text-white font-bold text-xl">
          <h2>شرکت توسعه تعاون عمران</h2>
          {/* <img src={logo} alt="logo" className=" w-20" /> */}
        </div>
        <div className=" relative">
          <div
            className="flex cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <MdPerson className=" w-6 h-6  fill-white" />
            <MdArrowDropDown className="w-6 h-6 fill-white" />
          </div>
        {showModal ? (
            <section>
               <div
                onClick={() => setShowModal(false)}
                className="w-screen h-screen fixed top-0 left-0 bg-[#262e3e63] opacity-100"
              ></div> 
              <div className=" w-72 bg-white font-semibold absolute left-0 top-16 p-6 rounded-lg text-[#6b7280]">
                <section>
                  <li className="flex relative justify-start m-2">
                    <img src={personImg} alt="تصویر" className=" w-12 h-11 rounded-full ml-2" />
                    <div className="modalDes">
                      <p>ایمان آخوندی</p>
                      <p>09356451716</p>
                    </div>
                  </li>
                  <hr className="m-3" />
                  <li className="flex relative justify-start mr-2">
                    <a href="/profile">حساب کاربری</a>
                  </li>
                  <li className="flex relative justify-start mr-2">
                    <p className=" cursor-pointer">خروج</p>
                  </li>
                </section>
              </div>
            </section>
          ) : null}
        </div>
      </div>
         
    </nav>
  );
};

export default Navbar;
