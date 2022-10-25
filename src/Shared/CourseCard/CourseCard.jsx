import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const CourseCard = (props) => {
  const { title, img, description , id ,rating} = props.data;
  return (
    <>
    <Link to={`/course/${id}`}>
    <div class="py-8 lg:flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 flex-shrink-0 flex items-center">
          <img
            class="lg:h-40 md:h-36 sm:h-80 w-full rounded-lg object-cover object-center"
            src={img}
            alt="blog"
          />
        </div>
        <div class="md:flex-grow lg:pl-8">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
            {title}
          </h2>
          <p class="leading-relaxed">{description?.slice(0, 150)} ...</p>
        <div className="flex items-center justify-between ">
        <Link to={`/course/${id}`} class="text-indigo-500 inline-flex items-center mt-4  hover:text-red-600">
            See Details
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <p className="flex items-center justify-between">Rating : <FaStar className="text-yellow-400"></FaStar> {rating}</p> 
        </div> 
        </div>
      </div>

    </Link>
     
    </>
  );
};

export default CourseCard;
