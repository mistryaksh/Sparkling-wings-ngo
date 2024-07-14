import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

export const FixedSocial = () => {
  return (
    <div className="fixed bg-white p-3 border right-0 top-[50%] flex gap-5 flex-col shadow-lg rounded-md">
      <AiOutlineWhatsApp size={30} />
      <AiOutlineYoutube size={30} />
      <AiOutlineInstagram size={30} />
    </div>
  );
};
