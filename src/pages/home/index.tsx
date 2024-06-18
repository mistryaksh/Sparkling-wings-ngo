import React from "react";
import { Navbar } from "../../layout";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between h-[80vh]">
        <div className="grid grid-cols-12 items-center mt-20 p-5 gap-3">
          <div className="xl:col-span-6 col-span-12 flex flex-col gap-3">
            <h1 className="text-blue-950 text-4xl sm:text-7xl tracking-wide sm:tracking-wider font-bold leading-tight mb-4 sm:mb-6">
              Empowering Communities Wings of{" "}
              <span className="text-primary-500">Compassion</span>, Rays of{" "}
              <span className="text-primary-500">Change</span>
            </h1>
            <p className="text-blue-950 text-sm sm:text-base tracking-wider font-light leading-relaxed mb-12">
              Sparkling Wings NGO: Where compassion takes flight, and change
              beams brightly. Join us in making a difference today.
            </p>
            <div className="flex justify-start">
              <button className="bg-primary-500 rounded-md text-white px-5 py-2">
                Join Now
              </button>
            </div>
          </div>
          <div className="xl:col-span-6 col-span-12 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-5 items-center container mx-auto">
        <div>
          <img
            src="
                  https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="space-y-5">
          <h4 className="text-4xl font-semibold">
            <span className="text-primary-500">About</span> Us
          </h4>
          <p className="whitespace-pre-wrap">
            Sparkling Wings NGO is a heartfelt initiative rooted in the passion
            and determination of its founder, Mr. Pavan Keshari. Born in the
            quaint village of Hanumanganj, Allahabad, Pavan’s journey has been
            one of resilience, purpose, and the unwavering belief in the
            transformative power of education.
            {`\n`}
            {`\n`} Having relocated to Mumbai in 2005, Pavan encountered his
            first obstacle when he had to drop a year of his studies due to a
            lack of a leaving certificate from his previous school. His parents,
            with limited education themselves, initially struggled to navigate
            the unfamiliar education system. However, their perseverance
            eventually secured him admission.
            {`\n`}
            {`\n`} Pavan completed his BSc.IT degree in Mumbai, but his desire
            to make a difference in the lives of underprivileged children began
            during his first year of studies in 2018. He started by providing
            books, food, and clothing to children living on the streets. This
            grassroots effort led him to discover the world of Non-Governmental
            Organizations (NGOs).
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-primary-100 to-gray-100 p-5 my-20 py-20 space-y-20">
        <h6 className="text-center text-xl uppercase">Meet us For Better</h6>
        <div className="grid xl:grid-cols-4 container mx-auto justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold text-gray-950">80</h1>
            <p>No of Volunteers</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold">10+</h1>
            <p>Awards</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold">10000+</h1>
            <p>People we helped</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold">2019</h1>
            <p>NGO Born Year</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20">
        <h4 className="text-4xl font-semibold">
          How <span className="text-primary-500">Changes</span> Happens
        </h4>
        <h6 className="uppercase underline decoration-primary-500">
          Our Programs
        </h6>
        <div className="grid xl:grid-cols-4 grid-cols-2 px-5 gap-5">
          <div className="relative max-w-xs border w-full border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 1
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 2
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 3
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 4
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 1
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 2
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card "
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 3
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1695365240.png"
                alt="Card "
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Program title 4
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button className="bg-primary-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-[60%] mx-auto space-y-20 my-20">
        <h4 className="text-4xl font-semibold">
          Our Latest <span className="text-primary-500">Images</span>
        </h4>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-7 container mx-auto space-y-10">
          <div className=" break-inside-avoid mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688031162.jpg"
              alt="Gallery "
            />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688031232.jpg"
              alt="Gallery "
            />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688031357.jpg"
              alt="Gallery "
            />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688031375.jpg"
              alt="Gallery "
            />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688031396.jpg"
              alt="Gallery "
            />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pagedone.io/asset/uploads/1688031414.png"
              alt="Gallery "
            />
          </div>
        </div>
      </div>
      <div className="flex items-center container mx-auto gap-10 mb-20 flex-wrap-reverse px-5">
        <div className="flex-1 mx-auto space-y-5">
          <h4 className="text-4xl font-semibold">
            <span className="text-primary-500">Connect</span> with us!
          </h4>
          <form action="">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
              <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  {" "}
                  First Name{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none "
                  placeholder="First Name"
                />
              </div>
              <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                  {" "}
                  Last Name{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  id="default-search"
                  className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none "
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="relative mb-6">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                {" "}
                Email{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="default-search"
                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none "
                placeholder="name@pagedone.com"
              />
            </div>
            <div className="relative mb-6">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                {" "}
                Message{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  ></path>
                </svg>
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <textarea
                    className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                    placeholder="Write a message..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex items-center  my-6">
              <input
                id="checkbox-policy"
                type="checkbox"
                value=""
                className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-primary-500 hover:bg-primary-100 checked:bg-no-repeat checked:bg-center checked:border-primary-500 checked:bg-primary-100"
              />
              <label
                htmlFor="checkbox-policy"
                className="text-sm font-normal text-gray-600"
              >
                You agree to our friendly{" "}
                <Link to="#" className="underline underline-offset-4">
                  privacy policy.
                </Link>
              </label>
            </div>
            <button className="w-52 h-12 bg-primary-600 hover:bg-primary-800 transition-all duration-700 rounded-lg shadow-xs text-white text-base font-semibold leading-6">
              Send Message
            </button>
          </form>
        </div>
        <div className="xl:flex-1">
          <img
            src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
