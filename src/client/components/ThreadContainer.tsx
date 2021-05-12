import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export const ThreadContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="container max-w-md px-8 py-12 text-lg bg-gray-100 border-2 border-solid border-blue-500 rounded-xl"
      {...props}
    >
      {children}
    </div>
  );
});
