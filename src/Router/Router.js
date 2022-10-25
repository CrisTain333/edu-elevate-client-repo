import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
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
            },
            {
                path:'/course/:id',
                loader:async({params})=>{
                    return(
                        fetch(`http://localhost:5000/courses/${params.id}`)
                    )

                },
                element:<CourseDetails/>

            }
        ]
    }
]);

export default router;
