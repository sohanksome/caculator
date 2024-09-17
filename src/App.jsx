import { useState } from 'react'
import './App.css'

function Caculate(){
  const [display, setDisplay] = useState(0)
  const [operator, setOperator]=  useState('');
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(null);
  const [haveDecimal, setHaveDecimal] = useState(false);
  const [decimalFactor, setDecimalFactor] = useState(0.1); 

  const handleButtonClick = (value) => {
    if(['+', '-', '*', '/'].includes(value) && number1 !== null){
      setOperator(value);
      setHaveDecimal(false);
      setDecimalFactor(0.1);
    }else if(value === '='){
      let result = 0;
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        case '/':
          result = number2 !==0 ? number1 / number2 : 'Error';
          break;
        default:
          break;
      }
      const roundedResult = parseFloat(result.toFixed(10));
      setDisplay(roundedResult);
      setNumber1(roundedResult);
      setNumber2(null);
      setHaveDecimal(false);
      setDecimalFactor(0.1);
    }else if(value === 'AC'){
      setNumber1(0);
      setNumber2(null);
      setOperator('');
      setDisplay(0);
      setHaveDecimal(false);
      setDecimalFactor(0.1);
    }else if(value === '.' && !haveDecimal){
      setHaveDecimal(true);
      const newDisplay = display + '.';
      setDisplay(newDisplay);
    }else{
      if(number1 !== null && operator !== ''){
        if(haveDecimal){
          const newNumber2 = parseFloat((number2 + parseFloat(value) * decimalFactor).toFixed(10));
          setNumber2(newNumber2);
          setDisplay(newNumber2.toString());
          setDecimalFactor(decimalFactor/10);
        }else{
          const newNumber2 = number2 * 10 + parseFloat(value)
          setNumber2(newNumber2);
          setDisplay(newNumber2.toString());  
        }
      }else{
        if(haveDecimal){
          const newNumber1 = parseFloat(((number1 + parseFloat(value) * decimalFactor)).toFixed(10));
          console.log(newNumber1);
          setNumber1(newNumber1);
          setDisplay(newNumber1.toString());
          setDecimalFactor(decimalFactor/10);
        }else{
          const newNumber1 = number1 * 10 + parseFloat(value);
          setNumber1(newNumber1);
          setDisplay(newNumber1.toString());
        }
      }
    }
  }
  
  return (
    <>
      <div id='display'>{display}</div>
      <div id='container'>
        <div id='left'>
          <button id='clear' className='double' onClick={() => handleButtonClick('AC')}>AC</button>
          <button id='divide' onClick={() => handleButtonClick('/')} className= 'selected'>/</button>
          <button id='seven' onClick={() => handleButtonClick('7')}>7</button>
          <button id='eight' onClick={() => handleButtonClick('8')}>8</button>
          <button id='nine' onClick={() => handleButtonClick('9')}>9</button>
          <button id='four' onClick={() => handleButtonClick('4')}>4</button>
          <button id='five' onClick={() => handleButtonClick('5')}>5</button>
          <button id='six' onClick={() => handleButtonClick('6')}>6</button>
          <button id='one' onClick={() => handleButtonClick('1')}>1</button>
          <button id='two' onClick={() => handleButtonClick('2')}>2</button>
          <button id='three' onClick={() => handleButtonClick('3')}>3</button>
          <button id='zero' className='double' onClick={() => handleButtonClick('0')}>0</button>
          <button id='decimal' onClick={() => handleButtonClick('.')}>.</button>
        </div>
        <div id='right'>
          <button id='multiply' onClick={() => handleButtonClick('*')} className='selected'>*</button>
          <button id='subtract' onClick={() => handleButtonClick('-')} className='selected'>-</button>
          <button id='add' onClick={() => handleButtonClick('+')} className='selected'>+</button>
          <button id='equals' onClick={() => handleButtonClick('=')} className= 'vertical-double selected'>=</button>
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
