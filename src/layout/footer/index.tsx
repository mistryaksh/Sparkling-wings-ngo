import React from "react";
import { AppButton } from "../../component";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { MdAddLocation } from "react-icons/md";

export const Footer = () => {
  const iconSize: number = 26;
  return (
    <footer className="w-full pt-10 bg-[#282828] text-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-12">
          <div className=" col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
            <div>
              <img src={require("../..//assets/spak-logo.png")} alt="" />
              <p>Sparkling Wings</p>
            </div>
            <div className="my-5 flex items-center gap-10">
              <AppButton primary>get involved</AppButton>
              <AppButton primary>Donate</AppButton>
            </div>
            <div className="flex gap-5 items-center">
              <AiOutlineFacebook size={iconSize} />
              <AiOutlineWhatsApp size={iconSize} />
              <AiOutlineYoutube size={iconSize} />
              <AiOutlineInstagram size={iconSize} />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6 mt-5 lg:col-span-6 md:col-span-6 sm:col-span-12 flex gap-10">
            <ul className="space-y-5 w-[50%]">
              <li>About Us</li>
              <li>Get Involved</li>
              <li>Our Work</li>
              <li>Media</li>
              <li>Our Branches</li>
            </ul>
            <div>
              <h6 className="text-2xl font-semibold">Contact Us</h6>
              <ul className="space-y-5">
                <li className="flex items-center gap-3 mt-3">
                  <AiOutlinePhone size={iconSize} />
                  <p>+91 99672 07326</p>
                </li>
                <li className="flex items-center gap-3 mt-3">
                  <AiOutlineMail size={iconSize} />
                  <p>sparklingwingsngo@gmail.com</p>
                </li>
                <li className="flex items-center gap-3 mt-3">
                  <MdAddLocation size={iconSize} />
                  <p>
                    Ghartanpada Pada no.1, Vaishali Nagar, DahisarEast,
                    Mumbai-400025, Maharashtra.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex justify-between gap-5 mt-10 pb-5 flex-wrap">
          <p className="capitalize">
            @2024 Sparkling Wings, All rights reserved
          </p>
          <div>
            <ul className="flex capitalize gap-10 items-center flex-wrap">
              <li>© of 2024</li>
              <li>terms & condition</li>
              <li>privacy policy</li>
              <li>
                <a href="https://aksh.ltd/" target="_blank" rel="noreferrer">
                  Developed by{" "}
                  <span className="text-indigo-500 underline">
                    AkshalWebSolution
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
