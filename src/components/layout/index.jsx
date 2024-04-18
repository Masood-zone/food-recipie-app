import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { useScrollToTop } from "../../utils/scrollToTop";
function Layout() {
  useScrollToTop();
  return (
    <div className="">
      <div className="w-[80%] h-auto mx-auto max-xl:w-full max-md:w-full">
        <Navbar />
        <div className="mt-28">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
