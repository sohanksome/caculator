import { useState } from 'react'
import './App.css'

function Caculate(){
  const [display, setDisplay] = useState(0)
  const [output, setOutput] = useState(0);
  const [operator, setOperator]=  useState('');
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [decimal, setDecimal] = useState(null);
  const [haveDecimal, setHaveDecimal] = useState(false);

  const handleButtonClick = (value) => {
    if(['+', '-', '*', '/'].includes(value) && number1 !== null){
      setOperator(value);
    }else if(value === '='){
      switch (operator) {
        case '+':
          setOutput(number1 + number2)
          break;
        case '-':
          setOutput(number1 - number2)
          break;
        case '*':
          setOutput(number1 * number2)
          break;
        case '/':
          setOutput(number1 / number2)
          break;
        default:
          break;
      }
    }else if(value === 'AC'){
      setNumber1(null);
      setNumber2(null);
      setOperator('');
      setOutput(0);
    }else if(value === '.'){
      setHaveDecimal(true);
    }else{
      if(number1 !== null && operator !== ''){
        setNumber2(10 * number2 + value);
        setDisplay(number2);
      }
      setNumber1(10 * number1 + parseInt(value));
      console.log(number1);
      setDisplay(parseInt(number1 + value));
    }
  }
  
  return (
    <>
      <div id='display'>{display}</div>
      <div id='container'>
        <div id='left'>
          <button id='AC' className='double' onClick={() => handleButtonClick('AC')}>AC</button>
          <button id='divide' onClick={() => handleButtonClick('/')}>/</button>
          <button id='7' onClick={() => handleButtonClick('7')}>7</button>
          <button id='8' onClick={() => handleButtonClick('8')}>8</button>
          <button id='9' onClick={() => handleButtonClick('9')}>9</button>
          <button id='4' onClick={() => handleButtonClick('4')}>4</button>
          <button id='5' onClick={() => handleButtonClick('5')}>5</button>
          <button id='6' onClick={() => handleButtonClick('6')}>6</button>
          <button id='1' onClick={() => handleButtonClick('1')}>1</button>
          <button id='2' onClick={() => handleButtonClick('2')}>2</button>
          <button id='3' onClick={() => handleButtonClick('3')}>3</button>
          <button id='0' className='double' onClick={() => handleButtonClick('0')}>0</button>
          <button id='decimal' onClick={() => handleButtonClick('.')}>.</button>
        </div>
        <div id='right'>
          <button id='multiply' onClick={() => handleButtonClick('*')}>*</button>
          <button id='subtract' onClick={() => handleButtonClick('-')}>-</button>
          <button id='add' onClick={() => handleButtonClick('+')}>+</button>
          <button id='equal' className='vertical-double' onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </>
  )
}

function App() {
  return(
    <Caculate />
  )
}

export default App
