import clsx from "clsx";
import React, { FC } from "react";

export interface AppButtonProps {
  primary?: boolean;
}

export const AppButton: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    AppButtonProps
> = ({ primary, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        primary ? "bg-primary-800 text-white" : "bg-white text-primary-800",
        "px-[50px] py-2 rounded-[10px] btn-text capitalize"
      )}
    >
      {children}
    </button>
  );
};
