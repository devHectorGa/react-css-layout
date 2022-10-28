import React, { FC, PropsWithChildren } from 'react'
import { filterChildrenByType } from '../../../../utils/filterChildrenByType'
import {
  HolyGrailMainContainer,
  HolyGrailMainContent,
  HolyGrailMainLeft,
  HolyGrailMainRight,
} from './HolyGrailMain.styles'

export const LeftContent = HolyGrailMainLeft
export const MainContent = HolyGrailMainContent
export const RightContent = HolyGrailMainRight

const HolyGrailMain: FC<PropsWithChildren> = ({ children }) => {
  const Left = filterChildrenByType(children, LeftContent)
  const Main = filterChildrenByType(children, MainContent)
  const Right = filterChildrenByType(children, RightContent)
  return (
    <HolyGrailMainContainer>
      <>{Right}</>
      <>{Main}</>
      <>{Left}</>
    </HolyGrailMainContainer>
  )
}

export default HolyGrailMain
