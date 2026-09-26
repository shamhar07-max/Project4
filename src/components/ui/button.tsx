import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn/ui Button, restyled to DigitalBurj tokens.
export const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px active:translate-y-0 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-accent-strong text-white shadow-[0_8px_20px_-10px_rgb(205_37_6/0.6)] hover:bg-accent-hover hover:shadow-[0_12px_26px_-10px_rgb(205_37_6/0.7)]",
        ink: "bg-ink text-white hover:bg-ink-2",
        outline: "border border-line-strong bg-paper text-ink hover:border-ink",
        ghost: "text-ink hover:bg-surface",
        inverse: "bg-white text-ink hover:bg-surface",
        "outline-inverse": "border border-white/40 text-white hover:border-white hover:bg-white/5",
        link: "text-accent-strong underline underline-offset-4 hover:decoration-2 px-0",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-body-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";
