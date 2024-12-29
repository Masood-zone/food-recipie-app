import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { useScrollToTop } from "../../utils/scrollToTop";
import { useState } from "react";
import { MainForm } from "../../pages/login";
function Layout() {
  const [showModal, setShowModal] = useState(false);
  useScrollToTop();
  return (
    <div className="">
      {showModal ? <MainForm setShowModal={setShowModal} /> : <></>}
      <div className="w-[80%] h-auto mx-auto max-xl:w-full max-md:w-full">
        <Navbar setShowModal={setShowModal} />
        <div className="mt-28">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
