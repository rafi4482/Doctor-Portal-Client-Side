import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
children:[
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
    },
    {
        path: "/appointment",
        element: <Appointment></Appointment>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
]
    },
  ]);


  export default router;