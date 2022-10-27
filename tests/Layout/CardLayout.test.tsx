import * as React from 'react'
import { render, screen } from '@testing-library/react'

import 'jest-canvas-mock'

import { CardLayout } from '../../src'

describe('CardLayout', () => {
  it('CardLayout render', () => {
    render(<CardLayout />)
    const linkElement = screen.getByText(/CardLayout/i)
    expect(linkElement).toBeDefined()
  })
})
