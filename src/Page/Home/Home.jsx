import React from "react";
import heroLogo from "../../Image/hr.jpg";
const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src={heroLogo}
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span className="text-green-500">Edu Elevate</span> Is The Best
                learning platform
                <br className="hidden md:block" />
              </h2>

              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                “For the best return on your money, pour your purse into your
                head.” “Leadership and learning are indispensable to each
                other.” “Intellectual growth should commence at birth and cease
                only at death.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Development team
          </p>
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            The talented people behind the scenes
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Amirul Islam
                </p>
                <p>Web Designer</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?2"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Sakib Xrz
                </p>
                <p>Front-End Developer</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Cristain
                </p>
                <p>Backend-End Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
