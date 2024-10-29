import { ComponentProps, ReactNode } from 'react'

interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label className="font-medium text-zinc-500" {...props}>
      {children}
    </label>
  )
}
