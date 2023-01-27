import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
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
    {
        path: "/dashboard",
                element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
    }
]);


export default router;