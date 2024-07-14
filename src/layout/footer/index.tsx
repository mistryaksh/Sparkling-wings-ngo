import React from "react";
import { AppButton } from "../../component";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

export const Footer = () => {
  const iconSize: number = 26;
  return (
    <footer className="w-full pt-10 bg-[#282828] text-white">
      <div className="container mx-auto">
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
          <div className="text-center col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 flex items-center gap-10">
            <div>
              <img src={require("../..//assets/spak-logo.png")} alt="" />
              <p>Sparkling Wings</p>
            </div>
            <div>
              <img src={require("../..//assets/spak-logo.png")} alt="" />
              <p>Sparkling Wings</p>
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex justify-between gap-5 mt-10 pb-5">
          <p className="capitalize">
            @2024 Sparkling Wings, All rights reserved
          </p>
          <div>
            <ul className="flex capitalize gap-10 items-center">
              <li>© of 2024</li>
              <li>terms & condition</li>
              <li>privacy policy</li>
              <li>
                <a href="https://aksh.ltd/" target="_blank">
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
