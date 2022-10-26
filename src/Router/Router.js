import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Blog from "../Page/Blog/Blog";
import CheckOut from "../Page/Checkout/CheckOut";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import Courses from "../Page/Courses/Courses";
import Faq from "../Page/FAQ/Faq";
import Home from "../Page/Home/Home";
import SingIn from "../Page/Logins/SingIn";
import SingUp from "../Page/Logins/SingUp";
import PrivateRoute from "./PrivateRoute";

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

            },
            {
                path:'/singin',
                element:<SingIn/>

            }
            ,
            {
                path:'/singup',
                element:<SingUp/>

            },
            {
                path:'/checkout',
                element: <PrivateRoute><CheckOut/></PrivateRoute>

            }
        ]
    }
]);

export default router;
