import { FC } from "react";

export const LayoutContainer: FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
};
