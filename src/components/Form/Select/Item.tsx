'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { ComponentProps } from 'react'

export type ItemProps = ComponentProps<typeof Select.Item>

export function Item({ children, ...props }: ItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      {children}

      <Select.ItemIndicator className="ml-auto">
        <Check className="h-5 w-5 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
