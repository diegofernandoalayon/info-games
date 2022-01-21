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
  
  const handleUpdateScore = (id) => {
    //pedir la info de cada user y luego actualizar mandando esta info mas la nueva, para evitar que se sobre escriba,
    const person = users.find(p => p.id === 3)
    const personUpdate = {
      ...person,
      score : [...person.score,999]
    }
    console.log(personUpdate)
    updateScore(3,personUpdate)
    

    setUsers(actual => actual.map(person => {
      if (person.id === 3){
        return personUpdate
      }
      return person
    }))
    /* */

  }
  // console.log(a)
  return (
    <div className="App">
      <header >
      <button onClick={handleUpdateScore}>aoeu</button>
      </header>
      <div className="App-header">
        {
          users.map(person => <Users key={person.id} person={person}/>)
        }
      </div>
    </div>
  )
}

export default App
