import React, { FC } from "react";
import { IconType } from "react-icons";
import { AppButton } from "../../UI";

export interface InvolvedSectionProps {
  points: {
    Icon: IconType;
    title: string;
    desc: string;
    redirectionPath: string;
  }[];
}

export const InvolvedSection: FC<InvolvedSectionProps> = ({ points }) => {
  return (
    <div className="container mx-auto my-20">
      <h3 className="text-3xl text-capitalize text-primary-800 font-semibold">
        Get Involved
      </h3>
      <div className="grid grid-cols-12 gap-20 mt-10">
        {points.map(({ Icon, desc, redirectionPath, title }, i) => (
          <div
            key={i}
            className="flex flex-col items-center py-10 px-5 gap-5 col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 border rounded-lg"
          >
            <div className="border rounded-full p-5 border-primary-800 ">
              <Icon size={100} color="#8d283f" />
            </div>
            <h6 className="text-2xl font-semibold capitalize">{title}</h6>
            <p className="font-light">{desc}</p>
            <AppButton primary>Join Us</AppButton>
          </div>
        ))}
      </div>
    </div>
  );
};
