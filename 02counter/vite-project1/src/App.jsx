import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter] = useState(15)
  //let counter=15


  const addValue=()=>{
   // console.log("value added",Math.random());
   console.log('clicked',Math.random());
    //counter=counter+1
    setCounter(counter+1)
  }
  
  return (
    <>
      <h1>Sim and react</h1>
      <h2>Counter value:{counter}</h2>

      <button 
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button>  remove value</button>
      <p>footer:{counter}</p>

    </>
  )
}

export default App
