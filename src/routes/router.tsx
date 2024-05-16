import {
  createBrowserRouter,
} from "react-router-dom";
// import SidebarWithHeader from "./SidebarWithHeader";
import NewRoute from "./NewRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewRoute />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>1234</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;