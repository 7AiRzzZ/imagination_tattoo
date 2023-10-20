import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/home";

import Fav from "../../pages/favori";
import Categorie from "../../pages/catégorie";
import Custom from "../../pages/customs";
import DashBoard from "../../pages/dashboard/dashboard";

import UserProvider from "../../components/context/userProvider";
import ShowCategory from "../../pages/catégorie/sections/showCategory";


export const Provider = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UserProvider>
          <Home />
        </UserProvider>
      </>
    ),
  },
  {
    path: "/categorie",
    element: <Categorie />,
  },
  {
    path: "/categorie/:id",
    element: <ShowCategory />,
  },
  {
    path: "/favoris",
    element: <Fav />,
  },
  {
    path: "/custom",
    element: <Custom />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <UserProvider>
          <DashBoard />
        </UserProvider>
      </>
    ),
  },
]);
