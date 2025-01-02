import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import GadgetCarts from './Components/GadgetCarts/GadgetCarts.jsx';
import CartDetails from './Components/CartDetails/CartDetails.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './Components/AboutUs/AboutUs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: "/",
            element: <GadgetCarts></GadgetCarts>,
            loader:()=>fetch('/gadgetData.json')
          },
          {
            path: "/category/:category",
            element: <GadgetCarts></GadgetCarts>,
            loader:()=>fetch('/gadgetData.json')
          }
        ]
      },
      {
        path: "/cart/:productId",
        element: <CartDetails></CartDetails>,
        loader:()=>fetch('/gadgetData.json')
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
        loader:()=>fetch('/gadgetData.json')
      },
      {
        path: "AboutUs",
        element: <AboutUs></AboutUs>,
      
      }


    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer 
   
    position="top-center"
    autoClose={2000} // in ms
    hideProgressBar={false}
    closeOnClick={true}
    pauseOnHover={true}
    draggable={true}
    progress={undefined}

    />
  </StrictMode>,
)
