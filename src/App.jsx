import { useState } from 'react';
import './App.css';

function Caculate() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setDisplay(result.toString());
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else if (value === 'AC') {
      setDisplay('0');
      setExpression('');
    } else {
      // Handle numbers and decimal point
      if (/[\d]/.test(value)) {
        if (display === '0' && value !== '.') {
          setDisplay(value);
        } else {
          setDisplay(prev => prev + value);
        }
      } else if (value === '.') {
        if (!display.includes('.')) {
          setDisplay(prev => prev + value);
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (display !== '0' || expression !== '') {
          setExpression(prev => prev + value);
          setDisplay(value);
        }
      }
    }
    
    // Update expression
    if (!['=', 'AC'].includes(value)) {
      const newExpression = expression + value;
      if (value === '0' && (expression === '' || /[\d+\-*/]$/.test(expression))) {
        return; // Prevent adding multiple leading zeros
      }
      setExpression(newExpression);
    }
  }

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
