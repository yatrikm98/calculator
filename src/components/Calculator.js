import { useState } from 'react';
import './Calculator.css'
import { IoBackspace } from "react-icons/io5";
const Calculator = () => {

    const [text, setText] = useState('')
    const [result, setResult] = useState('')


    const handleClearEverything = () => {
        setText('')
        setResult('')
    }

    const handleAddOne = () => {
        setText(text + "1")
    }

    const handleAddTwo = () => {
        setText(text + "2")
    }

    const handleAddThree = () => {
        setText(text + "3")
    }

    const handleAddFour = () => {
        setText(text + "4")
    }

    const handleAddFive = () => {
        setText(text + "5")
    }

    const handleAddSix = () => {
        setText(text + "6")
    }

    const handleAddSeven = () => {
        setText(text + "7")
    }

    const handleAddEight = () => {
        setText(text + "8")
    }

    const handleAddNine = () => {
        setText(text + "9")
    }

    const handleAddZero = () => {
        setText(text + "0")
    }


    const handleAdd = () => {
        setText(text + "+")
    }

    const handleSubtract = () => {
        setText(text + '-')
    }

    const handleMultiply = () => {
        setText(text + "x")
    }

    const handleDivide = () => {
        setText(text + '/')
    }

    const handleFinalResult = () => {

        if(text[text.length-1] === "+" || text[text.length-1] === "-" || text[text.length-1] === "/" || text[text.length-1] === "x"){
            setResult('Invalid Number')
            return;
        }
        
        let stringSplit = text.split('')
        // console.log(stringSplit, 'stringSlit')
        let finalNumberArray = []
        let intermediateArray = []
        for (let i = 0; i < stringSplit.length; i++) {
            if (stringSplit[i] === "x") {
                intermediateArray = intermediateArray.join('')
                finalNumberArray.push(intermediateArray)
                finalNumberArray.push('X')
                intermediateArray = []
            } else if (stringSplit[i] === '+') {
                intermediateArray = intermediateArray.join('')
                finalNumberArray.push(intermediateArray)
                finalNumberArray.push('+')
                intermediateArray = []
            } else if (stringSplit[i] === "-") {
                intermediateArray = intermediateArray.join('')
                finalNumberArray.push(intermediateArray)
                finalNumberArray.push('-')
                intermediateArray = []
            } else if (stringSplit[i] === "/") {
                intermediateArray = intermediateArray.join('')
                finalNumberArray.push(intermediateArray)
                finalNumberArray.push('/')
                intermediateArray = []
            } else {
                intermediateArray.push(stringSplit[i])
                // console.log(intermediateArray)
            }

        }
        let data = intermediateArray.join('')
        // console.log(data)
        finalNumberArray.push(data)
        // console.log(finalNumberArray, 'finalNumbeerArray')


        let arrayAfterRemovingMultiply = []
        for (let i = 0; i < finalNumberArray.length; i++) {
            if (finalNumberArray[i + 1] === 'X') {
                let firstNumber = Number(finalNumberArray[i])
                let secondNumber = Number(finalNumberArray[i + 2])
                let finalResult = firstNumber * secondNumber
                arrayAfterRemovingMultiply.push(finalResult.toString())
                i = i + 2
            } else {
                arrayAfterRemovingMultiply.push(finalNumberArray[i])
            }


        }
        // console.log(arrayAfterRemovingMultiply, 'arrayAfterRemovingMultiply')

        let arrayAfterDivide = []

        for (let i = 0; i < arrayAfterRemovingMultiply.length; i++) {
            if (arrayAfterRemovingMultiply[i + 1] === '/') {
                let firstNumber = Number(arrayAfterRemovingMultiply[i])
                let secondNumber = Number(arrayAfterRemovingMultiply[i + 2])
                let finalResult = firstNumber / secondNumber
                arrayAfterDivide.push(finalResult.toString())
                i = i + 2
            } else {
                arrayAfterDivide.push(arrayAfterRemovingMultiply[i])
            }


        }
        // console.log(arrayAfterDivide, 'arrayAfterDivide')
        let finalReultOfEntireArray = []
        let stack = []

        for (let i = 0; i < arrayAfterDivide.length; i++) {
            // console.log('Inside loop')
            stack.push(arrayAfterDivide[i])
            // console.log(stack, 'stack')
            if (stack.length === 3) {
                // console.log(stack, 'Stack')
                let firstNumber = Number(stack[0])
                let secondNumber = Number(stack[2])
                if (stack[1] === '+') {
                    let result = firstNumber + secondNumber
                    stack.pop()
                    stack.pop()
                    stack.pop()
                    stack.push(result.toString())
                } else {
                    let result = firstNumber - secondNumber
                    stack.pop()
                    stack.pop()
                    stack.pop()
                    stack.push(result.toString())
                }
            }
        }
        finalReultOfEntireArray.push(stack)
        stack = []

        // console.log(finalReultOfEntireArray, 'finalResult')
        setResult(finalReultOfEntireArray[0][0])
        setText('')
    }

    const handleBackspace=()=>{
        let stateText=text
        stateText= stateText.slice(0,text.length-1)
        setText(stateText)    
    }

    return (
        <div className='mainCalculatorDiv'>
            <div className='mainCalculator'>
                <div className='upperPartDiv'>
                    <div className='subpart subpart1'>
                        <div className='bigDiv'>{text}</div>
                        <div className='smallDiv' onClick={handleBackspace}><IoBackspace /></div>
                    </div>
                    <div className='subpart subpart1'>
                        <div className='bigDiv'>{result}</div>
                        <div className='smallDiv' onClick={handleClearEverything}>AC</div>
                    </div>

                </div>
                <div className='lowerPartDiv'>
                    <div className='commononLowerPart'>
                        <div className='commonDiv div1' onClick={handleAddOne}>1</div>
                        <div className='commonDiv' onClick={handleAddTwo}>2</div>
                        <div className='commonDiv' onClick={handleAddThree}>3</div>
                        <div className='commonDiv lastDiv' onClick={handleAdd}>+</div>
                    </div>
                    <div className='commononLowerPart'>
                        <div className='commonDiv div1' onClick={handleAddFour}>4</div>
                        <div className='commonDiv' onClick={handleAddFive}>5</div>
                        <div className='commonDiv' onClick={handleAddSix}>6</div>
                        <div className='commonDiv lastDiv' onClick={handleSubtract}>-</div>
                    </div>
                    <div className='commononLowerPart'>
                        <div className='commonDiv div1' onClick={handleAddSeven}>7</div>
                        <div className='commonDiv' onClick={handleAddEight}>8</div>
                        <div className='commonDiv' onClick={handleAddNine}>9</div>
                        <div className='commonDiv lastDiv' onClick={handleMultiply}>*</div>
                    </div>
                    <div className='commononLowerPart'>
                        <div className='commonDiv div1' onClick={handleAddZero}>0</div>
                        <div className='commonDiv delete' onClick={handleFinalResult}>=</div>

                        <div className='commonDiv lastDiv' onClick={handleDivide}>/</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;