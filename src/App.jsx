import { useEffect, useState } from 'react'
import './App.css'
import personServices from './services/persons'
import Users from './components/Users'
import FormNewPerson from './components/FormNewPerson'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{

    personServices
      .getPersons()
        .then(res => setUsers(res))
      
  },[])
  const handleUpdateScore = (id, score) => {
    const person = users.find(p => p.id === id)
    const personUpdate = {
      ...person,
      score : [...person.score,score]
    }
    personServices
      .updateScore(id,personUpdate)

    setUsers(actual => actual.map(person => person.id === id ? personUpdate : person))

  }
  // console.log(a)
  return (
    <div className="App">
      <header >
        <h1>info-games</h1>
      </header>
      <div className="App-header">
        {
          users.map(person => <Users key={person.id} person={person} update={handleUpdateScore}/>)
        }
        <FormNewPerson setUsers={setUsers}/> 
      </div>
    </div>
  )
}

export default App
