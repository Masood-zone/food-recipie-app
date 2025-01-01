import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "../components/sidebar/admin-sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/navbar/admin-navbar";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <DashboardNavbar />
        <main className="p-5">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
