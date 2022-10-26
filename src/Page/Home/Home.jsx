import React from "react";
import BrandLogo from "../../Image/brand.png";
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
                <span className="text-green-500">Edu Elevate</span> Is The Best learning platform
                <br className="hidden md:block" />
               
              </h2>

              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                “For the best return on your money, pour your purse into your head.”
                “Leadership and learning are indispensable to each other.”
                “Intellectual growth should commence at birth and cease only at death.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={BrandLogo}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              “In learning you will teach,
              <br className="hidden md:block" />
              and{" "}
              <span className="inline-block text-deep-purple-accent-400">
                in teaching you will learn.”
              </span>
            </h2>
            <p className="mb-8 leading-relaxed">
              Online learning is not the next big thing, it is the now big thing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
