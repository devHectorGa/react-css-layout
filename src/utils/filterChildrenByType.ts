import { Children, FC, isValidElement, ReactNode } from 'react'

export const filterChildrenByType = (children: ReactNode, type: FC): ReactNode =>
  Children.toArray(children).find((child) => isValidElement(child) && child.type === type)
