import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckBox from './CheckBox'

describe('<CheckBox />', () => {
  test('it should mount', () => {
    render(<CheckBox />)

    const CheckBox = screen.getByTestId('CheckBox')

    expect(CheckBox).toBeInTheDocument()
  })
})
