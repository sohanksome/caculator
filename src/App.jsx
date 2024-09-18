import { useState } from 'react';
import './App.css';

function Caculate() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [lastInput, setLastInput] = useState('');
  

  // Function to format numbers to a specified number of decimal places
  const formatNumber = (number, decimals = 4) => {
    return Number(number).toFixed(decimals);
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the expression
        const result = eval(expression); // Use eval with caution

        // Format the result with up to 4 decimal places
        const formattedResult = formatNumber(result, 4);

        // Remove trailing zeros and decimal point if necessary
        const displayResult = parseFloat(formattedResult).toString();

        // Update display and expression
        setDisplay(displayResult);
        setExpression(displayResult);
        setLastInput('result');
      } catch (error) {
        setDisplay('Error');
        setExpression('');
        setLastInput(''); // Reset lastInput on error
      }
    } else if (value === 'AC') {
      setDisplay('0');
      setExpression('');
      setLastInput('');
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (lastInput === '') {
        // If the expression starts with an operator, handle it differently
        if (value === '-') {
          setExpression(prev => prev + value);
          setDisplay(value);
        }
      } else if (['+', '-', '*', '/'].includes(lastInput)) {
        // If the last input was an operator, replace it unless it's a minus sign
        if (value !== '-') {
          setExpression(prev => {
            // Remove all trailing operators except for the minus sign
            let trimmedExpression = prev.replace(/[\+\-\*\/]+$/, '');
            return trimmedExpression + value;
          });
        } else {
          // If the last operator was a minus sign, handle it specially
          setExpression(prev => prev + value);
        }
        setDisplay(value);
      } else {
        // Handle the case where there was a number before the operator
        setExpression(prev => prev + value);
        setDisplay(value);
      }
      setLastInput(value);
    } else if (value === '.') {
      // Handle decimal point
      if (!display.includes('.') || ['+', '-', '*', '/'].includes(lastInput)) {
        setDisplay(prev => (['+', '-', '*', '/'].includes(lastInput) ? '0.' : prev + value));
        setExpression(prev => prev + value);
        setLastInput('.');
      }
    } else {
      // Handle numbers
      if (display === '0' && value === '0') return; // Prevent multiple leading zeros
      if (['+', '-', '*', '/'].includes(lastInput)) {
        setDisplay(value); // Start a new number after an operator
      } else {
        setDisplay(prev => (prev === '0' ? value : prev + value));
      }
      setExpression(prev => prev + value);
      setLastInput(value);
      
    }
  };

  return (
    <>
      <div id='display'>{display}</div>
      <div id='container'>
        <div id='left'>
          <button id='clear' className='double' onClick={() => handleButtonClick('AC')}>AC</button>
          <button id='divide' onClick={() => handleButtonClick('/')} className='selected'>/</button>
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
          <button id='equals' onClick={() => handleButtonClick('=')} className='vertical-double selected'>=</button>
        </div>
      </div>
    </>
  );
}

function App() {
  return <Caculate />;
}

export default App;
