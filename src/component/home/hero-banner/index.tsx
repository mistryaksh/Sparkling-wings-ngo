import React, { FC } from "react";
import { AppButton } from "../../UI";

export const HeroBanner: FC = () => {
  return (
    <div className="bg-primary-800 text-white xl:pb-0 pb-5">
      <div className="grid grid-cols-12 pl-10 gap-5 flex-wrap-reverse">
        <div className="col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 xl:py-20 xl:order-1 order-2">
          <div className="flex flex-col gap-3 justify-start items-start">
            <h1 className="hero-banner-headline font-semibold">
              Wings of Compassion Rays of Change
            </h1>
            <p className="mb-5 whitespace-pre-wrap hero-banner-desc font-light">
              Sparkling Wings NGO:{"\n"}Where compassion takes flight, and
              change beams brightly.{"\n"}Join us in making a difference today.
            </p>
            <AppButton>Join Us</AppButton>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12 xl:py-0 py-10 sm:col-span-12 xl:order-2 order-1">
          <img
            src={require("../../../assets/hero-image.png")}
            className="w-full h-full object-cover rounded-l-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
