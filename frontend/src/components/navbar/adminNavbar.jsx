import React from "react";
import { dashboadLogo } from "../../assets/svgs";
import { admin_links } from "./data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { RiMenuLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { logoutUser } from "../../redux/slice/userSlice";

export function AdminNavbar() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="w-64 h-full bg-[#cf1758] text-white flex px-5 py-5 flex-col gap-0 rounded-3xl mx-2">
      {/* Header */}
      <div className="w-36 h-36 mx-auto hover:cursor-pointer rounded-lg mt-10">
        <img src={dashboadLogo} alt="main-icon" className="w-full h-full" />
      </div>
      {/* Nav links */}
      <div className="flex-1 flex-col items-start justify-start px-3  py-1 mt-4 w-full mx-auto">
        {admin_links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={classNames(
              "flex items-center justify-start w-full h-12 rounded-lg my-2 px-2",
              {
                "text-white bg-gray-500": location.pathname === link.path,
                "text-gray-300": location.pathname !== link.path,
              }
            )}
          >
            <img src={link.icon} alt={link.title} className="" />
            <span className="ml-3">{link.title}</span>
          </Link>
        ))}
      </div>
      {/* User Account section */}
      <div className="flex-none ">
        <p className="">
          Email: {user?.email}
          <p className="flex justify-between">
            {user?.role}
            <Link to="/" className="text-base">
              Go Home
            </Link>
          </p>
          <button
            className="bg-white text-[#F43F5E] font-medium px-2 py-1 rounded-md transition-all duration-300 hover:bg-gray-500 hover:text-white"
            onClick={() => {
              logoutUser();
              navigate("/");
            }}
          >
            Logout
          </button>
        </p>
      </div>
    </nav>
  );
}

export function AdminMobileNavbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  return (
    <nav className="w-full h-16 bg-[#cf1758] text-white flex px-5 py-5 items-center justify-between">
      {/* Mobile nav header */}
      <div className="flex items-center max-md:justify-start">
        <img
          src={dashboadLogo}
          alt="main-icon"
          className="w-20 h-20 max-md:w-16 max-md:h-16 max-[399px]:w-12 max-[399px]:h-12"
        />
        <button onClick={() => navigate("/admin")} className="text-2xl">
          Meals App
        </button>
      </div>
      {/* Mobile nav links */}
      <details className="dropdown dropdown-bottom dropdown-end">
        <summary className="m-1 btn btn-ghost">
          <RiMenuLine fontSize={30} />
        </summary>
        <ul className="p-2 shadow-2xl menu dropdown-content z-[1] bg-base-100 mt-2 rounded-box w-96 max-[399px]:w-52 h-max">
          {admin_links.map((item) => (
            <li
              key={item.id}
              className="py-2 text-[17px] max-[399px]:text-sm max-[399px]:p-0"
            >
              <Link to={item.path} className=" text-black">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/" className="text-black text-lg">
              Go Home
            </Link>
          </li>
          {/* Avatar info */}
          <li>
            <p className="text-black flex flex-col items-start">
              <p className="">{user?.role}</p>
              <p>Email: {user?.email}</p>
              <button
                className="bg-base-300 text-[#F43F5E] font-medium px-2 py-1 rounded-md transition-all duration-300 hover:bg-gray-500 hover:text-white"
                onClick={() => {
                  logoutUser();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </p>
          </li>
        </ul>
      </details>
    </nav>
  );
}
