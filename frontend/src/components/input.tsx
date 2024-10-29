import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="flex w-full items-center justify-between border-2 border-zinc-300 bg-white px-3 py-2 focus-within:border-green-500">
        <input
          autoComplete="off"
          className="w-full bg-transparent text-zinc-700 outline-none placeholder:text-zinc-400"
          ref={ref}
          {...props}
        />
        {children}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
