import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import rootRoutes from "./routes/root.routes";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={rootRoutes} />
      <Toaster />
    </ThemeProvider>
  );
}
