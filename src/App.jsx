import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [msg ,setMsg]= useState('')
  const clickChange1= () =>{
    if(count<15){
      setCount(count+1)
      setMsg('')
    }
    

    else
    setMsg("Value can not be greater than 15")
  }
  const clickChange2= () =>{
    if(count>0){
      setCount(count-1)
      setMsg('')
    }
      
    else{
      setMsg('Value Of Cout Can not be Negative')
    }
      
  }

  return (
    <>
      
      <h1>Counter Game</h1>
      <div className="card">
        <button className='btn' onClick={clickChange1}>
          Add
        </button>
        <button className='btn' onClick={clickChange2}>
          Remove
        </button>


        <p className="read-the-docs">
        {msg}
      </p>
      
      </div>
      <p className="read-the-docs">
      Count is {count}
      </p>
    </>
  )
}

export default App
