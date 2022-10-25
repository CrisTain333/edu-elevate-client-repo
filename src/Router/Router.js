import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Courses from "../Page/Courses/Courses";
import Home from "../Page/Home/Home";

const router =  createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/Courses',
                loader:async()=>{
                    return(
                        fetch('http://localhost:5000/courses')
                    )
                },
                element:<Courses/>
            }
        ]
    }
]);

export default router;
