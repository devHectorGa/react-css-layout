import { PropsWithChildren } from 'react'
import { CSSProp } from 'styled-components'

export type CardLayoutProps = PropsWithChildren<{
  columns?: number
  containerStyles?: CSSProp
  itemStyles?: CSSProp
}>
