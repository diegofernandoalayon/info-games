import { useEffect, useState } from 'react'
import './App.css'
import {getPersons, updateScore} from './services/persons'
import Users from './components/Users'
function App() {
  const [count, setCount] = useState([])
  const [update, setUpdate] = useState(0)
  useEffect(()=>{
    
    getPersons()
      .then(res => setCount(res))
      
  },[update])
  
  const handleUpdateScore = (id) => {
    //pedir la info de cada user y luego actualizar mandando esta info mas la nueva, para evitar que se sobre escriba,
    const person = count.find(p => p.id === 3)
    const personUpdate = {
      ...person,
      score : [...person.score,999]
    }
    console.log(personUpdate)
    // getPerson(2)
    //   .then(res => console.log(res))
    updateScore(3,personUpdate)
    setUpdate(actual => actual + 1)
    console.log(update)
  }
  // console.log(a)
  return (
    <div className="App">
      <header >
      <button onClick={handleUpdateScore}>aoeu</button>
      </header>
      <div className="App-header">
        {
          count.map(person => <Users key={person.id} person={person}/>)
        }
      </div>
    </div>
  )
}

export default App
