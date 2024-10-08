import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@layouts/index";
import { AboutUs, Categories, Home, Products } from "@pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
