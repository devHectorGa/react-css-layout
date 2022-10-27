import styled from 'styled-components'
import { CardLayoutProps } from './CardLayout.types'

export const CardLayoutContainer = styled.div<CardLayoutProps>`
  align-content: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  padding: 1rem;

  ${({ containerStyles }) => containerStyles}
`
