import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateInput from './DateInput'

describe('<DateInput />', () => {
  test('it should mount', () => {
    render(<DateInput />)

    const DateInput = screen.getByTestId('DateInput')

    expect(DateInput).toBeInTheDocument()
  })
})
