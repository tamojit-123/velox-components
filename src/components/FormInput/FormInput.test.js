import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormInput from './FormInput'

describe('<FormInput />', () => {
  test('it should mount', () => {
    render(<FormInput />)

    const FormInput = screen.getByTestId('FormInput')

    expect(FormInput).toBeInTheDocument()
  })
})
