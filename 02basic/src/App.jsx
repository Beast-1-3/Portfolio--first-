//import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  //const [count, setCount] = useState(0)
let MyObj ={
  name:"hello",
  age :12 
}

  return (
    <>
     <h1 className='bg-green-400 text-black p-4  mb-4 rounded-xl'>
      Tailwind Test
      

     </h1>
     
     < Card channel="HELLO" btnon="DEMO"/>
     <br/>
     < Card channel="leap" btnon="faith"/>
    </>
  )
}

export default App
