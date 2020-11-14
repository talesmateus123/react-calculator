import React from 'react'
import ReactDom from 'react-dom'
import CalculatorService from './calculator.service'

describe('CalculatorService tests', () => {
    const [calculate, concatenateNumber, SUM, SUBTRACTION, MULTIPLICATION, DIVISION] = CalculatorService();

    it('must ensure that 1 + 4 is equal to 5', () => {
        let sum = calculate(1, 4, SUM)
        expect(sum).toEqual(5)
    })

    it('must ensure that 1 - 4 is equal to -3', () => {
        let sum = calculate(1, 4, SUBTRACTION)
        expect(sum).toEqual(-3)
    })

    it('must ensure that 1 * 4 is equal to 4', () => {
        let sum = calculate(1, 4, MULTIPLICATION)
        expect(sum).toEqual(4)
    })

    it('must ensure that 1 / 4 is equal to 0.25', () => {
        let sum = calculate(1, 4, DIVISION)
        expect(sum).toEqual(0.25)
    })

    it('must to return 0 to unsupported operations', () => {
        let sum = calculate(1, 4, '$')
        expect(sum).toEqual(0)
    })
})