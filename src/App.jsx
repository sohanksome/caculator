import { useState } from 'react'
import './App.css'

function CreateButtons(){
  const buttons = Array.from({length: 9}, (_, i) => i + 1);
  return(
    <>
    <div id='display'>hello</div>
    <div id='container'>
    <div id='left'>
      <button id='AC'>AC</button>
      <button id='divide'>/</button>
      <button id='7'>7</button>
      <button id='8'>8</button>
      <button id='9'>9</button>
      <button id='4'>4</button>
      <button id='5'>5</button>
      <button id='6'>6</button>
      <button id='1'>1</button>
      <button id='2'>2</button>
      <button id='3'>3</button>
      <button id='0'>0</button>
      <button id='decimal'>.</button>
    </div>
    <div id='right'>
      <button id='mutiply'>*</button>
      <button id='subtract'>-</button>
      <button id='add'>+</button>
      <button id='equal'>=</button>
    </div>
    </div>
    </>
  )
}

function App() {

  return (
    <>
      <CreateButtons />
    </>
  )
}

export default App
