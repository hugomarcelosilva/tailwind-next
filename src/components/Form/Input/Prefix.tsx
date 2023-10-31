import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}
