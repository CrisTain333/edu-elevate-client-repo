import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./corce.css";
import CourseCard from "../../Shared/CourseCard/CourseCard";
const Courses = () => {
  const cources = useLoaderData();
  console.log(cources);
  return (
    <div className="courseMainDiv relative ">
      <div className="leftSide ">
        <div className="flex flex-col lg:sticky lg:top-1 p-3 h-auto bg-gray-50 rounded-lg dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-3">
            <div className="lg:flex items-center lg:justify-between sm:justify-center">
              <h2 className=" font-semibold text-2xl sm:text-center "> Our Cources</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm uls">
                {cources.map((c) => {
                  return (
                    <li className="rounded-sm" key={c.id}>
                      <Link
                        to={`/course/${c.id}`}
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <span className="text-xl hover:text-red-600">
                          {c.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-10 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
            {
                cources.map(e=>{
                    return(
                        <CourseCard key={e.id} data={e}/>
                    )
                })
            }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
