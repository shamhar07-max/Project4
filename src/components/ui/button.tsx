import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn/ui Button, restyled for the DigitalBurj AI theme: capsule shape, gradient fill and glow.
export const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-(--ease-out-quint) hover:-translate-y-px active:translate-y-0 active:scale-[0.97] [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[linear-gradient(110deg,var(--color-accent-deep),var(--color-ember))] text-white shadow-[0_0_0_1px_rgb(255_255_255/0.08)_inset,0_10px_30px_-10px_rgb(252_48_18/0.7)] hover:shadow-[0_0_0_1px_rgb(255_255_255/0.14)_inset,0_14px_40px_-8px_rgb(252_48_18/0.85)] hover:brightness-110",
        ink: "border border-line-strong bg-night text-ink hover:border-ai/60",
        outline: "border border-line-strong bg-fill text-ink backdrop-blur-md hover:border-ai/60 hover:bg-ai-soft hover:shadow-[0_0_24px_-8px_var(--color-ai)]",
        ghost: "text-ink hover:bg-fill",
        inverse: "bg-ink text-night hover:bg-white",
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
