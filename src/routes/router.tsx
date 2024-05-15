import {
  createBrowserRouter,
} from "react-router-dom";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>;alsdjf;lasjf;lasj;flkjas;lfja;lsjf;laksjf;lajs;lfkja;slkfdj</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;