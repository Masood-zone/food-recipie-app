import { Outlet } from "react-router-dom";
import {
  AdminNavbar,
  AdminMobileNavbar,
} from "../../components/navbar/adminNavbar";

function AdminLayout() {
  return (
    <main className="w-screen h-screen flex py-5 px-10 gap-6 max-[999px]:p-0 max-[999px]:gap-0 max-[999px]:flex-col">
      {/* Navigations */}
      <div className="max-[999px]:hidden">
        <AdminNavbar />
      </div>
      <div className="min-[999px]:hidden">
        <AdminMobileNavbar />
      </div>
      {/* Outlet structure */}
      <div className=" w-full overflow-y-scroll">
        <Outlet />
      </div>
    </main>
  );
}

export default AdminLayout;
