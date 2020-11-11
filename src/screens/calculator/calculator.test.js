import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import Calculator from './calculator'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calculator />, div);
    unmountComponentAtNode(div)
});
