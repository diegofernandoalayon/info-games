import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {getPersons} from './services/persons'
function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{

    getPersons()
      .then(res => setCount(res))
  },[])
  
    
  // console.log(a)
  return (
    <div className="App">
      <header className="App-header">
        todo
        {
          count.map(oe => <p key={oe.id}>{oe.name}</p>)
        }
      </header>
    </div>
  )
}

export default App
