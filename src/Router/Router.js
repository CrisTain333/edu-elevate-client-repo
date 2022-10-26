import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Blog from "../Page/Blog/Blog";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import Courses from "../Page/Courses/Courses";
import Faq from "../Page/FAQ/Faq";
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

            },
            {
                path:'/faq',
                element: <Faq/>

            },
            {
                path:'/blog',
                element:<Blog/>

            }
        ]
    }
]);

export default router;
