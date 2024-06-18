import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap px-6 py-2 bg-gray-100 backdrop-blur-md fixed top-0 w-full">
      <div className="flex items-center flex-shrink-0 text-gray-900 mr-6 lg:mr-72">
        <img
          src={process.env.PUBLIC_URL + "logo.jpeg"}
          width="10%"
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex flex-col lg:flex-row lg:flex lg:items-center lg:w-auto gap-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Popover className="relative" data-open>
          <PopoverButton
            className=" text-gray-900 flex items-center gap-2 focus:outline-none"
            data-open
          >
            Our Work
            <FiChevronDown size={22} />
          </PopoverButton>
          <PopoverPanel
            data-open
            anchor="bottom"
            className="flex flex-col w-auto bg-white p-3 rounded-md border gap-4 mt-3"
          >
            <div className="group cursor-pointer">
              <Link
                className="text-lg group-hover:text-primary-400 text-gray-900 font-bold flex items-center gap-3"
                to="#"
              >
                For Education
                <FiArrowRight />
              </Link>
              <p className="text-gray-500 font-semibold">Goals & Objective</p>
              <p className="text-gray-400">
                Ready about our Project Photos (teaching photos), personality
                development, events & more
              </p>
            </div>
            <div className="group cursor-pointer">
              <Link
                to="#"
                className="text-lg group-hover:text-primary-400  text-gray-900 font-bold flex gap-3 items-center"
              >
                For Civic Volunteering
                <FiArrowRight />
              </Link>
              <p className="text-gray-500 font-semibold">
                Volunteering Up Skilling
              </p>
              <p className="text-gray-400">
                Connects with UN nation goals causes
              </p>
            </div>
            <div className="group cursor-pointer">
              <Link
                to="#"
                className="text-lg group-hover:text-primary-400  text-gray-900 font-bold flex gap-3 items-center"
              >
                For Health
                <FiArrowRight />
              </Link>
              <p className="text-gray-500 font-semibold">Aims</p>
              <p className="text-gray-400">
                Organizing Blood Camp, Health Check Ups, Awareness events & More
                .
              </p>
              <p className="text-gray-400">
                Connects with UN nation goals causes
              </p>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover className="relative" data-open>
          <PopoverButton
            className=" text-gray-900 flex items-center gap-2 focus:outline-none"
            data-open
          >
            Get Involved
            <FiChevronDown size={22} />
          </PopoverButton>
          <PopoverPanel
            data-open
            anchor="bottom"
            className="flex flex-col w-[200px] bg-white p-3 rounded-md border gap-4 mt-3"
          >
            <Link to="#">Join Us</Link>
            <a href="/engagement">Be a Partner</a>
            <a href="/security">Donate</a>
          </PopoverPanel>
        </Popover>
        <Popover className="relative" data-open>
          <PopoverButton
            className=" text-gray-900 flex items-center gap-2 focus:outline-none"
            data-open
          >
            About Us <FiChevronDown size={22} />
          </PopoverButton>
          <PopoverPanel
            data-open
            anchor="bottom"
            className="flex flex-col w-[200px] bg-white p-3 rounded-md border gap-4 mt-3"
          >
            <a href="/analytics">Our Vision</a>
            <a href="/engagement">Our Mission</a>
            <a href="/security">Meet our team</a>
            <a href="/security">Legal & Finance</a>
          </PopoverPanel>
        </Popover>
        <Link to="/">Contact Us</Link>
      </div>
    </nav>
  );
};
