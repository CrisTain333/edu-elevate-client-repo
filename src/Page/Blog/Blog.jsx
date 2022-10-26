import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container lg:px-24 sm:p-10 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">
                  What Is Cors?
                </h2>
                <p className="leading-relaxed">
                  Cross-Origin Resource Sharing (CORS) is an HTTP-based security
                  mechanism controlled and enforced by the client (web browser).
                  It allows a service (API) to indicate any origin other than
                  its own from which the client can request resources. It has
                  been designed in response to the same-origin policy (SOP) that
                  restricts how a website (HTML document or JS script) loaded by
                  one origin can interact with a resource from another origin.
                  CORS is used to explicitly allow some cross-origin requests
                  while rejecting others. CORS is implemented primarily in web
                  browsers, but it can also be used in API clients as an option.
                  It's present in all popular web browsers like Google Chrome,
                  Firefox, Opera, and Safari.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">
                  Why Are You Using Firebase? What Other Options Do You Have To
                  Implement Authentication?
                </h2>
                <p className="leading-relaxed">
                  Firebase is a less technical and time-saving alternative to
                  writing full-fledged backend code for dynamic apps. You might
                  also want to consider leveraging this tool if you eventually
                  wish to host and manage your app in the cloud. Being
                  serverless, Firebase removes the need to worry about the
                  technicalities of cloud server configuration.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">
                  How Does The Private Route Work?
                </h2>
                <p className="leading-relaxed">
                  Private Routes vary based on the Apps, For example, Dashboard,
                  User Profile, App Settings, Home etc. In simple words, These
                  routes can be accessed only after login. The constraints for
                  Public and Private routes are that Public routes should not be
                  accessed after login and Private routes should not be
                  accessible before login. The private route component is
                  similar to the public route, the only change is that redirect
                  URL and authenticate condition. If the user is not
                  authenticated he will be redirected to the login page and the
                  user can only access the authenticated routes If he is
                  authenticated (Logged in).
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-3xl font-medium text-gray-900 title-font mb-2">
                What Is Node? How Does Node Work?
                </h2>
                <p className="leading-relaxed">
                Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
