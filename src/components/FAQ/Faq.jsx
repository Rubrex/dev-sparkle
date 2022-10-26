import React from "react";
import { motion } from "framer-motion";
import { FramerContext } from "../../contexts/FramerMotionProvider";
import { useContext } from "react";

const Faq = () => {
  const { pageVariants } = useContext(FramerContext);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      {/* Banner */}
      <div>
        <img
          src="http://www.basehoundmedia.com/wp-content/uploads/2019/04/faq-banner.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Frequently Asked
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">How</span>
              </span>{" "}
              can we imporove ourself from this platform?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              The only way you can get best out of this platform is by
              practicing a lot. By a lot we mean stop getting in tutorial loops
              and get on writing code yourself.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is a web developer?
                </p>
                <p className="text-gray-700">
                  A web developer is a programmer who makes websites, and apps
                  for the World Wide Web. A web developer builds a website from
                  the bottom up, developing everything from layout to functions
                  and features on the page.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  Are a web developer and a web designer the same thing?
                </p>
                <p className="text-gray-700">
                  A web developer is more concerned with functionality and
                  features of a website, and versed in the programming languages
                  required to create them. Web developers will still need to
                  understand the aesthetics and art direction of the site as
                  they implement features.
                  <br></br>
                  <br></br> A web designer will create the logos, graphics, and
                  layout that determine the look and feel of a website. Web
                  designers will use software like Adobe Photoshop and
                  Illustrator to create these materials. A web designer with a
                  knowledge of code can help him/her better communicate with the
                  web developer.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What does web development entail exactly?
                </p>
                <p className="text-gray-700">
                  Web development isn’t just building what the user sees.
                  There’s a lot underneath the hood of a modern website, and a
                  good web developer can traverse across the entire terrain.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What makes a good web developer?
                </p>
                <p className="text-gray-700">
                  It takes more than an awesome portfolio to score a full-time
                  web developer position at a company. You can do the work well,
                  but can you work well with the company?
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What are some web development tips for junior devs?
                </p>
                <p className="text-gray-700">
                  Constantly keep updated on all the latest web technologies.
                  Languages and frameworks are updating all the time, and so are
                  the latest design trends.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What education or experience do I need to get into web
                  development?
                </p>
                <p className="text-gray-700">
                  You don’t need a university degree to be a web developer, or
                  any programmer for that matter. But it certainly doesn’t hurt.
                  Universities offer more structure and a smoother learning
                  experience than teaching yourself everything. But costs of
                  attending a university could be a blocker for many.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
