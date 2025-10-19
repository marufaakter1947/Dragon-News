import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";
import About from "../Pages/About";
import Career from "../Pages/Career";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/category/:id",
            element:<CategoryNews></CategoryNews>,
            loader: ()=> fetch("/news.json"),
            hydrateFallbackElement:<Loading></Loading>,
        }
    ]
  },
  {
    path:"/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
       {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  },
  {
path: "/about",
element:<About></About>
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
  {
    path: "/news-details/:id",
    element:(<PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>),
    loader: ()=> fetch("/news.json"),
    hydrateFallbackElement:<Loading></Loading>,
  }
])