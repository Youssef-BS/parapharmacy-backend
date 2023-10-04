import React from "react";
import NavbarSet from "./components/navbar/Navbar";
import  Name from "./components/name project/Name";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet , Navigate  } from "react-router-dom";
import All from "./pages/allProduct/All";
import Details from "./pages/details/Details";





function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Name />
        <NavbarSet />
        <Outlet/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/allproduct",
          element: <All />,
        },
        {
          path: "/details",
          element: <Details />,
        }
        ],
        }
      ]);

        return (
          <div>
            <RouterProvider router={router} />
          </div>
        );
}

export default App;
