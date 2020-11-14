function CalculatorService() {
    const SUM = '+'
    const SUBTRACTION = '-'
    const MULTIPLICATION = '*'
    const DIVSION = '/'

    const calculate = (number1, number2, operation) => {
        let result = 0
        switch(operation) {
            case SUM:
                result = number1 + number2
                break;
            case SUBTRACTION:
                result = number1 - number2
                break;
            case MULTIPLICATION:
                result = number1 * number2
                break;
            case DIVSION:
                result = number1 / number2
                break;
        }
        return result
    }

    const concatenateNumber = (currentyNumber, newNumber) => {
        if(currentyNumber === '0' || !currentyNumber) {
            currentyNumber = ''
        }

        if(newNumber === '.' && newNumber === '') {
            return 0
        }

        if(newNumber === '.' && currentyNumber.indexOf('.') > -1) {
            return currentyNumber
        }

        return currentyNumber + newNumber
    }

    return [
        calculate,
        concatenateNumber,
        SUM,
        SUBTRACTION,
        MULTIPLICATION,
        DIVSION 
    ]
}


export default CalculatorService