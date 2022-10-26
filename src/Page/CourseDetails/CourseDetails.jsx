import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaSketch, FaUserFriends } from "react-icons/fa";
const CourseDetails = () => {
  const {
    img,
    description,
    title,
    authorName,
    authorImg,
    authorDetails,
    instructorRating,
    reviews,
    totalStudents,
  } = useLoaderData();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <h2 className="text-center font-mono mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              {title}
            </h2>
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={img}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h3 className="text-2xl py-3 font-semibold">Course Discription</h3>
                <p className="leading-relaxed text-lg mb-4">{description}</p>
                <Link to="/checkout" className="text-indigo-500 inline-flex items-center">
                  <button className="inline-flex items-center justify-center bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                    Get premium access
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <article className="max-w- px-6 py-10 mx-auto space-y-12  dark:bg-gray-800 dark:text-gray-50">
              <div className="pt-12 border-t dark:border-gray-700">
                <h3 className=" text-2xl text-gray-900 font-bold py-5">
                  Author
                </h3>
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-start">
                  <img
                    src={authorImg}
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">{authorName}</h4>
                    <p className="dark:text-gray-900   flex items-center">
                      <FaStar className="text-yellow-400 mx-2" />
                      {instructorRating} Instructor Rating
                    </p>
                    <p className="dark:text-gray-900 py-2 flex items-center">
                      {" "}
                      <FaSketch className="mx-2" /> {reviews} Reviews
                    </p>
                    <p className="dark:text-gray-900  flex items-center">
                      {" "}
                      <FaUserFriends className="mx-2" /> {totalStudents}{" "}
                      Students
                    </p>
                  </div>
                </div>
                <p className="dark:text-gray-400 py-5">{authorDetails}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
