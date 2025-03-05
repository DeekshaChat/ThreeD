import React from 'react';
import {Link} from 'react-router'


function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-300 border border-t-2 border-t-black">
      <div className="relative z-10 px-4">
        <div className="-m-6 flex flex-wrap items-start">
          <div className="w-full p-6 md:w-1/3 lg:w-2/12 text-left">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-green-900">
              SERVICES
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700 content-start"
                      to="/"
                  >
                        Paint Protection Film (PPF)
                  </Link>
                </li>
                <li className="mb-4">
                    <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                    >
                        Graphene Coating (12H)
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                    >
                        Ceramic Coating (10H)
                    </Link>
                </li>
                <li>
                    <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                    >
                        Interior Detailing
                    </Link>
                </li>
                <li>
                    <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                    >
                        Exterior Detailing
                    </Link>
                </li>
                <li>
                    <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                    >
                        Alloy Wheel Coating
                    </Link>
                </li>
                <li>
                    <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                    >
                        Glass Coating
                    </Link>
                </li>
                <li>
                  <Link
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/">
                  Steam Wash
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12 text-left">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-green-900">
              PRODUCTS
              </h3>
              <ul>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Exterior
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Interior
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Ceramic
                      </Link>
                  </li>
                  <li>
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Compounds & Polishes
                      </Link>
                  </li>
                  <li>
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Professional
                      </Link>
                  </li>
                  <li>
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Accessories
                      </Link>
                  </li>
                  

              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12 text-left">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-green-900">
              QUICK LINKS
              </h3>
              <ul>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Home
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Become a Dealer
                      </Link>
                  </li>
                  <li>
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Become a Distributor
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Franchise
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Blogs
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          Contact Us
                      </Link>
                  </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12 text-left">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-green-900">
              Contact Us
              </h3>
              <ul>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                            customer@3dproductsindia.in
                            
                      </Link>
                  </li>
                  <li className="mb-4">
                      <Link
                          className=" text-base font-medium text-gray-900 hover:text-gray-700"
                          to="/"
                      >
                          7056607080
                      </Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;