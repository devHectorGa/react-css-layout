import React, { FC, PropsWithChildren } from 'react'
import { filterChildrenByType } from '../../utils/filterChildrenByType'
import { componentGenerator } from '../../utils/generateBasicComponent'
import { HolyGrailMain } from './components'
import { HolyGrailContainer } from './HolyGrailLayout.styles'

export const HeaderContent: FC<PropsWithChildren> = componentGenerator({
  displayName: 'HolyGrailLayout.Header',
  tagName: 'header',
})()
export const MainContent = HolyGrailMain
export const FooterContent: FC<PropsWithChildren> = componentGenerator({
  displayName: 'HolyGrailLayout.Footer',
  tagName: 'footer',
})()

const HolyGrailLayout: FC<PropsWithChildren> = ({ children }) => {
  const Header = filterChildrenByType(children, HeaderContent)
  const Main = filterChildrenByType(children, MainContent)
  const Footer = filterChildrenByType(children, FooterContent)

  return (
    <HolyGrailContainer>
      <>{Header}</>
      <>{Main}</>
      <>{Footer}</>
    </HolyGrailContainer>
  )
}

export default HolyGrailLayout
