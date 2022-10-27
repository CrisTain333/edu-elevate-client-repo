import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/brandLogo.png";
import AuthContext from "../../Contexts/Context";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, singOutUser } = useContext(AuthContext);

  const getdata = e =>{
    
  }

  return (
    <>
      <div className="px-4 py-5 mx-auto z-50 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={logo} className="h-14 " alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Edu<span className="text-green-500 text-2xl">Elevate</span>
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Courses"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 "
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
              >
                <span>
                  <FaSun />
                </span>
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />
                  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:bg-gray-600"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
                <span>
                  <FaMoon />
                </span>
              </label>
            </li>
            {user ? (
              <>
                <li>
                  <img
                    className="inline-block h-10 w-10 mr-2 rounded-full ring-2 ring-white"
                    src={user?.photoURL}
                    alt=""
                  ></img>
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded "
                    onClick={singOutUser}
                  >
                    Sing Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/singin"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                  >
                    Sing In
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} className="h-10 " alt="" />

                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <span className="text-green-500">Edu</span>Elevate
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/home"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                          <label
                            htmlFor="Toggle2"
                            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
                          >
                            <span>
                              <FaSun />
                            </span>
                            <span className="relative">
                              <input
                                id="Toggle2"
                                type="checkbox"
                                className="hidden peer"
                              />
                              <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:bg-gray-600"></div>
                              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                            <span>
                              <FaMoon />
                            </span>
                          </label>
                        {user ? (
                          <>
                            <img
                              className="inline-block h-10 w-10 mr-2 rounded-full ring-2 ring-white"
                              src={user?.photoURL}
                              alt=""
                            />
                            <button
                              type="button"
                              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                              onClick={singOutUser}
                            >
                              Sing Out
                            </button>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link
                                to="/singin"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                              >
                                Sing In
                              </Link>
                            </li>
                          </>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
