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

    return [
        calculate,
        SUM,
        SUBTRACTION,
        MULTIPLICATION,
        DIVSION 
    ]
}


export default CalculatorService