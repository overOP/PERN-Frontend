import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayOut";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Form from "./components/Form";

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
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/form",
                element: <Form />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            
        ],
    }
])