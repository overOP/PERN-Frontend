import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayOut";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Form from "./components/Form";
import PostForm from "./components/postForm";
import DataApi from "./components/dataApi";
import Profile from "./components/Profile";
import ImgApi from "./components/ImgApi";
import Paginate from "./components/Paginate";
import SwiperComponent from "./components/SwiperComponent";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        children: [
            {
                path: "/swiperComponent",
                element: <SwiperComponent />,
            },
            {
                path: "/paginate",
                element: <Paginate />,
            },
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
                path: "/postForm",
                element: <PostForm />,
            },
            {
                path: "/imgApi",
                element: <ImgApi />,
            },
            {
                path: "/dataApi",
                element: <DataApi />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            
        ],
    }
])