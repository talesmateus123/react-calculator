import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Calculator from './calculator'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calculator', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Calculator />, div);
        unmountComponentAtNode(div)
    });

    it('must to clean the numbers field', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('C'))
        expect(getByTestId('displayTxt')).toHaveValue('0')
    })

    it('must to sum 2 + 3 and get the result 5', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('displayTxt')).toHaveValue('5')
    })

    it('must to sum 2 + 3 and get the result 5', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('displayTxt')).toHaveValue('5')
    })

    it('must to sum 2 - 3 and get the result -1', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('-'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('displayTxt')).toHaveValue('-1')
    })

    it('must to sum 2 * 3 and get the result 6', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('*'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('displayTxt')).toHaveValue('6')
    })

    it('must to sum 2 / 3 and get the result 0.6', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('/'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('displayTxt')).toHaveValue('0.6666666666666666')
    })
})
