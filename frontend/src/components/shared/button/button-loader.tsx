import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonLoaderProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

export const ButtonLoader = React.forwardRef<
  HTMLButtonElement,
  ButtonLoaderProps
>(
  (
    { children, className, disabled, isLoading, loadingText, ...props },
    ref
  ) => {
    return (
      <Button
        className={cn("relative", className)}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center bg-inherit">
            <Loader2 className="h-4 w-4 animate-spin" />
          </span>
        )}
        <span className={cn(isLoading && "invisible")}>
          {isLoading ? loadingText : children}
        </span>
      </Button>
    );
  }
);

ButtonLoader.displayName = "ButtonLoader";
