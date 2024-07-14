import React, { FC } from "react";
import { AppButton } from "../../UI";
import { useNavigate } from "react-router-dom";

export interface InfoSectionProps {
  title: string;
  description: string;
  redirectionPath: string;
  btnText: string;
  image: string;
}

export const InfoSection: FC<InfoSectionProps> = ({
  btnText,
  description,
  image,
  redirectionPath,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 items-center container mx-auto mt-20 gap-10 px-5">
      <div className="col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-3xl font-semibold text-primary-800 text-capitalize">
            {title}
          </h1>
          <p className="text-lg font-light">{description}</p>
          <AppButton primary onClick={() => navigate(redirectionPath)}>
            {btnText}
          </AppButton>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
        <img src={image} alt={title} className="rounded-lg" />
      </div>
    </div>
  );
};
