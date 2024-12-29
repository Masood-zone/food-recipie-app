import React from "react";
import { NAVBAR_LINKS } from "./data";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import MainLogo from "../logo";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import { logoutUser } from "../../redux/slice/userSlice";

function Navbar({ setShowModal }) {
  const dispatch = useDispatch();
  const [currLink, setCurrLink] = React.useState("home");
  const { wishList } = useSelector((state) => state.recipie);
  const { user } = useSelector((state) => state.user);

  const totalWishList = wishList.length;
  return (
    <nav className="navbar h-16 fixed top-0 left-0 w-full right-0 bg-white z-[1] flex justify-center items-center">
      {/* Logo */}
      <div className="navbar-start hover:cursor-pointer ">
        <MainLogo />
      </div>
      {/* Links*/}
      <div className="navbar-center flex text-dark-blue text-lg gap-5 max-md:hidden max-[990px]:hidden ">
        {NAVBAR_LINKS.map((link) =>
          link.path === "/" || link.path === "/about-us" ? (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setCurrLink(link.title.toLowerCase())}
              className={
                currLink === link.title.toLowerCase()
                  ? "pb-[2px] border-b-2 border-b-dark-blue"
                  : ""
              }
            >
              {link.title}
            </Link>
          ) : (
            <a
              key={link.id}
              href={link.path}
              onClick={() => setCurrLink(link.title.toLowerCase())}
              className={
                currLink === link.title.toLowerCase()
                  ? "pb-[2px] border-b-2 border-b-dark-blue"
                  : ""
              }
            >
              {link.title}
            </a>
          )
        )}
      </div>
      {/* Cart and form modal */}
      <div className="navbar-end flex items-center ">
        <div className="flex items-center gap-10 max-md:gap-4 max-md:hidden">
          <div className="relative w-10 h-10">
            <Link to="/wishlist">
              <FaCartPlus fontSize={35} className="text-dark-blue" />
            </Link>
            {/* Display cart total here */}
            <p className="absolute bottom-0 right-0 px-2 bg-[#F43F5E] text-center text-white rounded-full">
              {totalWishList}
            </p>
          </div>
          {/* Show modal here */}
          {user?.id ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1 btn">
                <MdAccountCircle className="w-8 h-8" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 "
              >
                <li>
                  <p>Email: {user?.email}</p>
                  <p>Role: {user?.role}</p>
                </li>
                <li>
                  {user?.role === "Admin" ? (
                    <a href="/admin" className="">
                      Go to Dashboard
                    </a>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <p>
                    <button
                      className="bg-[#F43F5E] text-white font-medium px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#f43f5e]"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </button>
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="max-[999px]:hidden bg-transparent text-base text-[#49557e] border border-tomato p-2 px-8 rounded-full cursor-pointer transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </div>
        {/* Mobile menu */}
        <MobileMenu setShowModal={setShowModal} />
      </div>
    </nav>
  );
}

export default Navbar;

function MobileMenu({ setShowModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="min-[990px]:hidden dropdown dropdown-end ">
      {/* Hamburger */}
      <div tabIndex={0} className="m-1 btn btn-sm btn-ghost">
        <CiMenuKebab fontSize={25} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 bg-base-200 rounded-box w-52 mt-5 shadow-lg"
      >
        {NAVBAR_LINKS.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          {user?.role === "Admin" ? (
            <a href="/admin" className="">
              Dashboard
            </a>
          ) : (
            ""
          )}
        </li>
        <li>
          {user?.id ? (
            <div className="flex flex-col items-start">
              <p>Email: {user?.email}</p>
              <p>
                <button
                  className="bg-[#F43F5E] text-white font-medium px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#f43f5e]"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </button>
              </p>
            </div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="min-[999px]:hidden"
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
