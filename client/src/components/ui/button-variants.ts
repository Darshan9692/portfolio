import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        electric: "bg-gradient-electric text-primary-foreground shadow-electric hover:shadow-glow hover:scale-[1.03] transition-all duration-300",
        glass: "bg-background/40 backdrop-blur-md border border-border/60 text-foreground hover:bg-background/70 hover:border-primary/50 transition-all duration-300",
      },
      size: {
        default: "h-10 px-5 py-2 rounded-full",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-7 text-base",
        xl: "h-14 rounded-full px-9 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
