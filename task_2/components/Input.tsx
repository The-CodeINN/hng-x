import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          `
    flex
    w-full
    px-3
    py-3
    border
    rounded-md
    text-sm
    placeholder-gray-500
    disabled:opacity-50
    disabled:cursor-not-allowed
    focus:outline-none
    `,
          className
        )}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
