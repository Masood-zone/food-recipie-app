import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import { Navbar } from "../components/navbar/navbar";

export default function HomeLayout() {
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
