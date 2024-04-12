import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Navbar from "./components/navbar";
import WishList from "./pages/wishlist";
import NotFound from "./pages/not-found";
import RecipieView from "./pages/menu/recipieView";
import Footer from "./components/footer";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-[80%] h-auto mx-auto max-xl:w-full max-md:w-full">
        <Navbar />
        <div className="mt-28">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/recipie-item/:id" element={<RecipieView />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/wishlist" element={<WishList />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
