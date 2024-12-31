import { Outlet } from "react-router-dom";
import Navbar from "./client/components/navbar/navbar";
import Footer from "./client/components/footer/footer";

export default function RootLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Contents */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
}
