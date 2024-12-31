import { ModeToggle } from "@/components/theme/toggle-theme";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="relative">
      <Outlet />
      {/* Theme */}
      <div className="fixed bottom-2.5 right-2.5">
        <ModeToggle />
      </div>
    </main>
  );
}
