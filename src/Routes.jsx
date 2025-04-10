import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayOut";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    }
])