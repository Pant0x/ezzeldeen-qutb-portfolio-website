import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const pixelButtonVariants = cva(
  "pixel-border font-mono font-bold transition-all duration-75 inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-pixel",
        terminal: "bg-terminal-green text-background shadow-glow",
        accent: "bg-accent text-accent-foreground shadow-pixel",
        secondary: "bg-secondary text-secondary-foreground shadow-pixel",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "px-4 py-2 text-sm",
        sm: "px-3 py-1 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "w-8 h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {}

export function PixelButton({
  className,
  variant,
  size,
  children,
  ...props
}: PixelButtonProps) {
  return (
    <button
      className={cn(
        pixelButtonVariants({ variant, size }),
        "hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}