import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")


  return (
    <>
    <div className="w-full h- h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="fixed flex flex-wrap justify-center gap-3 shaw"></div>
      </div>

    </div>
     
    </>
  )
}

export default App
