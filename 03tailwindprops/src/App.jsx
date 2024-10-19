import { useState } from 'react'


import './App.css'
import Card from './components/Card.1'

function App(props) {
 const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21

  }
  let newArr=[1,2,3]


  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind test</h1>
      <Card username="chaiaurcode"  btnText="clcik me"/>
      <Card username="hitesh" btnText="visit me" />

      </>
  )
}

export default App
