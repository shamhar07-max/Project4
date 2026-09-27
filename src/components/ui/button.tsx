import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn/ui Button in the DigitalBurj light SaaS style: black capsule primary, orange as the accent.
export const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-(--ease-out-quint) hover:-translate-y-px active:translate-y-0 active:scale-[0.97] [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-ink text-white shadow-[0_1px_0_rgb(255_255_255/0.12)_inset,0_10px_24px_-10px_rgb(11_12_12/0.6)] hover:bg-ink-2",
        accent: "bg-accent-deep text-white shadow-[0_10px_30px_-10px_rgb(252_48_18/0.7)] hover:bg-accent-hover",
        ink: "bg-ink text-white hover:bg-ink-2",
        outline: "border border-line-strong bg-paper text-ink shadow-[0_1px_2px_rgb(11_12_12/0.05)] hover:border-ink/40",
        ghost: "text-ink hover:bg-fill",
        inverse: "bg-white text-ink hover:bg-cream",
        "outline-inverse": "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/15",
        link: "rounded-none text-accent-strong underline underline-offset-4 hover:decoration-2 px-0 active:scale-100",
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
