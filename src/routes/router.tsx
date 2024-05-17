import { createBrowserRouter } from 'react-router-dom';
// import SidebarWithHeader from "./SidebarWithHeader";
import NewRoute from './NewRoute';
import WaterDetails from '../components/WaterDetails';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NewRoute />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/:id',
        element: <WaterDetails />,
      },
    ],
  },
]);

export default router;
