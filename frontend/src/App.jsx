import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import rootRoutes from "./pages";
function App() {
  return (
    <div>
      <RouterProvider router={rootRoutes} />
      <ToastContainer />
    </div>
  );
}

export default App;
