import React from "react";

const CourseDetails = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
      
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <article className="max-w-2xl px-6 py-10 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
           
              <div className="pt-12 border-t dark:border-gray-700">
              <h3 className="text-center text-2xl text-gray-400 py-8">Course Author</h3>
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                    <p className="dark:text-gray-400">
                      Sed non nibh iaculis, posuere diam vitae, consectetur
                      neque. Integer velit ligula, semper sed nisl in, cursus
                      commodo elit. Pellentesque sit amet mi luctus ligula
                      euismod lobortis ultricies et nibh.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
