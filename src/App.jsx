import { useEffect, useState } from 'react'
import './App.css'
import {getPersons, updateScore} from './services/persons'
import Users from './components/Users'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{

    getPersons()
      .then(res => setUsers(res))
      
  },[])
  
  const handleUpdateScore = (id, score) => {
    const person = users.find(p => p.id === id)
    const personUpdate = {
      ...person,
      score : [...person.score,score]
    }
    updateScore(id,personUpdate)

    setUsers(actual => actual.map(person => person.id === id ? personUpdate : person))

  }
  // console.log(a)
  return (
    <div className="App">
      <header >
      <button onClick={handleUpdateScore}>aoeu</button>
      </header>
      <div className="App-header">
        {
          users.map(person => <Users key={person.id} person={person} update={handleUpdateScore}/>)
        }
      </div>
    </div>
  )
}

export default App
