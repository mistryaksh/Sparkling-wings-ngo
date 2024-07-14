import React, { FC } from "react";
import { AppButton } from "../../UI";
import { useNavigate } from "react-router-dom";

export interface ProgramSectionProps {
  data: {
    image: string;
    title: string;
    description: string;
    redirectionPath: string;
  }[];
}

export const ProgramSection: FC<ProgramSectionProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto mt-20 px-5">
        <h3 className="text-3xl text-capitalize text-primary-800 font-semibold">
          Our Programs
        </h3>
      </div>
      <div className="my-10 container mx-auto px-5">
        <div className="grid grid-cols-12 xl:gap-10 justify-center items-center w-full">
          {data.map(({ description, image, redirectionPath, title }, i) => (
            <div
              key={i}
              className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 relative"
            >
              <img src={image} alt={title} />
              <div className="absolute w-full bg-gray-900 bg-opacity-70 bottom-0 text-white p-3 flex flex-col gap-3 items-center">
                <h6 className="text-2xl font-semibold">{title}</h6>
                <p className="px-5 text-center font-light">{description}</p>
                <AppButton onClick={() => navigate(redirectionPath)} primary>
                  Know More
                </AppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
