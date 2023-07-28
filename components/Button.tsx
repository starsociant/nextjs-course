import { ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps {
  children: ReactNode;
  squared?: boolean;
}

export default function Button({ children, squared = false }: ButtonProps) {
  const classes = classNames([
    "inline-flex",
    "items-center",
    "bg-secondary-light",
    "gap-3",
    {
      "py-2 px-4": !squared,
    },
    {
      "p-2": squared,
    },
    "rounded-lg",
  ]);

  return <button className={classes}>{children}</button>;
}
