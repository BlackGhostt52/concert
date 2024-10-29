import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'font-semibold outline-none transition box',
    'focus-visible:ring-2 focus-visible:ring-green-400',
    'disabled:opacity-70',
  ],

  variants: {
    variant: {
      primary:
        'bg-green-500 text-white [&:not(:disabled)]:hover:bg-green-600 disabled:cursor-not-allowed',
      secondary:
        'bg-zinc-200 text-zinc-700 [&:not(:disabled)]:hover:bg-zinc-300',
      ghost: 'hover:bg-white/20',
      outline: 'border-2 border-zinc-300 text-zinc-500 hover:bg-zinc-100',
      link: 'hover:text-zinc-900 shadow-none text-zinc-500',
      destructive:
        'bg-rose-500 text-white [&:not(:disabled)]:hover:bg-rose-600 disabled:cursor-not-allowed',
    },

    size: {
      lg: 'p-4',
      md: 'px-4 py-2',
      sm: 'p-2',
      icon: 'p-3',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
