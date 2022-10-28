import InternalComponent, { FooterContent, HeaderContent, MainContent } from './HolyGrailLayout'

type THolyGrailLayout = typeof InternalComponent

interface IHolyGrailLayout extends THolyGrailLayout {
  Content: typeof MainContent
  Footer: typeof FooterContent
  Header: typeof HeaderContent
}

const HolyGrailLayout = InternalComponent as IHolyGrailLayout
HolyGrailLayout.Content = MainContent
HolyGrailLayout.Footer = FooterContent
HolyGrailLayout.Header = HeaderContent

export { HolyGrailLayout }
