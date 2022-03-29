import LoginSession from "../LoginSession";
import Link from "next/link";
import React, { useState } from "react"




const Navbar = () => {
  const logo = "/logo100px.png";

  const [mobileVisible, setmobileVisible] = useState(true);

  return (
          <nav className="">
              <div className="fixed mx-auto px-4 bg-white z-50 w-full">
                  <div className="flex justify-between">
                      <div className="flex space-x-7">
                          <div>
                              {/*Website Logo*/}
                              <Link href="/">
                                  <a  className="flex items-center no-underline py-4 px-2">
                                      <img src={logo} alt="Logo" className=" mr-2"/>
                                  </a>
                              </Link>
                          </div>
                          {/*Primary Navbar items */}
                          <div className="hidden md:flex items-center px-5 lg:mx-auto lg:space-x-8 xl:space-x-14 ">
                              <Link href="/">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 hover:text-green-500 hover:border-b-4 hover:border-green-500 no-underline font-semibold ">Home</a>
                              </Link>
                              <Link href="/about">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 hover:text-green-500 hover:border-b-4 hover:border-green-500 no-underline font-semibold ">About</a>
                              </Link>
                              <Link href="/projects">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition no-underline duration-300">Projects</a>
                              </Link>
                              <Link href="/calculator">
                                  <a href=""
                                     className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition no-underline duration-300">Calculator</a>
                              </Link>
                              {/*<Link href="/about">*/}
                              {/*  <a href=""*/}
                              {/*     className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition no-underline duration-300">Contact*/}
                              {/*      Us</a>*/}
                              {/*</Link>*/}
                          </div>
                      </div>
                      {/*Secondary Navbar items*/}
                      <div className="hidden md:flex items-center space-x-3 ">
                          <LoginSession/>
                      </div>
                      {/*Mobile menu button*/}
                      <div className="md:hidden flex items-center">
                          <button className="outline-none mobile-menu-button"
                                  // onClick={()=> setmobileVisible(!mobileVisible)}
                          >
                              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                   x-show="!showMenu"
                                   fill="none"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                              >
                                  <path d="M4 6h16M4 12h16M4 18h16"/>
                              </svg>
                          </button>
                      </div>
                  </div>
                  <div className="flex flex-column sm:hidden relative bg-white h-fit items-center"  style={{visibility: mobileVisible ? "visible" : "hidden"}}>
                      <Link href="/">
                          <a href=""
                             className="py-1 px-2 text-gray-700 hover:text-green-500 hover:border-b-4 hover:border-green-500 no-underline font-semibold ">Home</a>
                      </Link>
                      <Link href="/about">
                          <a href=""
                             className="py-1 px-2 text-gray-700 hover:text-green-500 hover:border-b-4 hover:border-green-500 no-underline font-semibold ">About</a>
                      </Link>
                      <Link href="/projects">
                          <a href=""
                             className="py-1 px-2 text-gray-700 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition no-underline duration-300">Projects</a>
                      </Link>
                      <Link href="/calculator">
                          <a href=""
                             className="py-1 px-2 text-gray-700 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition no-underline duration-300">Calculator</a>
                      </Link>
                  </div>
              </div>


          </nav>

  );
};

export default Navbar;
