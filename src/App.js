// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./App/Routes/rootLayout";
// ------------------------------------------------------
// UI Components
// ------------------------------------------------------
import Home from "./App/components/home";
import MapPage from "./App/components/mapPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/map-page",
        element: <MapPage />,
      }
    ]
  },

]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
