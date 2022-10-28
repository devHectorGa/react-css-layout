import React, { createElement, forwardRef, HTMLAttributes } from 'react'
const isDevEnv = process.env.NODE_ENV !== 'production'

type tagListOptions = 'header' | 'footer' | 'main' | 'section' | 'aside'
type GeneratorProps = {
  displayName: string
  tagName: tagListOptions
}
interface BasicComponentProps extends HTMLAttributes<HTMLDivElement> {
  tagName: tagListOptions
}

const BasicComponent = forwardRef<HTMLElement, BasicComponentProps>(({ tagName, children, ...props }, ref) => {
  return createElement(tagName, { ...props, ref }, children)
})
if (isDevEnv) BasicComponent.displayName = 'BasicComponent'

export function componentGenerator({ displayName, tagName }: GeneratorProps) {
  return (Component = BasicComponent) => {
    const Adapter = forwardRef<HTMLElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
      return <Component ref={ref} tagName={tagName} {...props} />
    })
    if (isDevEnv) {
      Adapter.displayName = displayName
    }
    return Adapter
  }
}
