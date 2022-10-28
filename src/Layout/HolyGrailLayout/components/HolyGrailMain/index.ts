import InternalComponent, { LeftContent, MainContent, RightContent } from './HolyGrailMain'

type THolyGrailMain = typeof InternalComponent

export interface IHolyGrailMain extends THolyGrailMain {
  Left: typeof LeftContent
  Main: typeof MainContent
  Right: typeof RightContent
}

const HolyGrailMain = InternalComponent as IHolyGrailMain

HolyGrailMain.Left = LeftContent
HolyGrailMain.Main = MainContent
HolyGrailMain.Right = RightContent

export { HolyGrailMain }
