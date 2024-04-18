import React from "react";
import { NAVBAR_LINKS } from "./data";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import MainLogo from "../logo";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Navbar() {
  const [currLink, setCurrLink] = React.useState("home");
  const { wishList } = useSelector((state) => state.recipie);

  console.log(wishList);
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
          <button
            className="bg-transparent text-[16px] text-dark-blue border-2 border-tomato px-6 py-3 rounded-full hover:bg-light-tomato cursor-pointer transition-all max-md:px-5 "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Sign In
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
        {/* Mobile menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;

function MobileMenu() {
  return (
    <div className="min-[990px]:hidden dropdown dropdown-end ">
      <div tabIndex={0} className="m-1 btn btn-sm btn-ghost">
        <CiMenuKebab fontSize={25} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 bg-base-200 rounded-box w-52 mt-5  shadow-lg"
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
          <button>Sign in</button>
        </li>
        {/* Display cart total here */}
      </ul>
    </div>
  );
}
