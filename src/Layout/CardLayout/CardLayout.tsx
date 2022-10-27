import React, { FC } from 'react'
import { CardLayoutContainer } from './CardLayout.styles'
import { CardLayoutProps } from './CardLayout.types'

export const CardLayout: FC<CardLayoutProps> = ({ children, ...props }) => {
  return <CardLayoutContainer {...props}>{children}</CardLayoutContainer>
}
