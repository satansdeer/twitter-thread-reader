import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="mt-8 px-4 py-2 rounded-xl text-white bg-blue-500"
      {...props}
    >
      {children}
    </button>
  );
});
