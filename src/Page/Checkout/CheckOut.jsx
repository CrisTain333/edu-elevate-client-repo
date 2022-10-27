import React from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../../Image/brandLogo.png";

const CheckOut = () => {
  const data = useLoaderData();
  return (
    <div>
      <section className="flex flex-col justify-center antialiased bg-gray-200 text-gray-600 min-h-screen p-4">
        <div className="h-full">
          {/* <!-- Card --> */}
          <div className="max-w-[360px] mx-auto">
            <div className="bg-white shadow-lg rounded-lg mt-9">
              {/* <!-- Card header --> */}
              <header className="text-center px-5 pb-5">
                {/* <!-- Avatar --> */}
                <img
                  className="inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
                  viewBox="0 0 72 72"
                  src={logo}
                  alt="brand"
                />
                {/* <!-- Card name --> */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Invoice from Edu <span>Elevate</span>
                </h3>
                <div className="text-sm font-medium text-gray-500">
                  Invoice #00224
                </div>
              </header>
              {/* <!-- Card body --> */}
              <div className="bg-gray-100 text-center px-5 py-6">
                <div className="text-sm mb-6">
                  <h3 className="text-2xl">Course</h3>
                  <strong className="text-xl font-bold text-gray-700">{data.title}</strong>
                </div>

                <button
                  type="submit"
                  className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-green-500 hover:bg-green-700 text-white focus:outline-none focus-visible:ring-2"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
