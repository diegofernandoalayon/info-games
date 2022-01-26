import { useEffect, useState } from 'react'
import './App.css'
import personServices from './services/persons'
import Users from './components/Users'
import FormNewPerson from './components/FormNewPerson'
// import { Routes, Route } from 'react-router'
import { Routes, Route, Link } from 'react-router-dom'

function App () {
  const [users, setUsers] = useState([])
  useEffect(() => {
    personServices
      .getPersons()
      .then(res => setUsers(res))
  }, [])
  const handleUpdateScore = (id, score) => {
    const person = users.find(p => p.id === id)
    const personUpdate = {
      ...person,
      score: [...person.score, score]
    }
    personServices
      .updateScore(id, personUpdate)

    setUsers(actual => actual.map(person => person.id === id ? personUpdate : person))
  }
  // console.log(a)
  return (
    <div className='App'>
      <header>
        <h1>info-games</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
        </nav>
      </header>
      <div className='App-header'>
        <Routes>
          <Route path='/' element={<h1>home</h1>} />
          <Route path='/users' element={<h1>mad world</h1>} />
          <Route path='/*' element={<h1>ruta no encontrada</h1>} />
        </Routes>

        {
          users.map(person => <Users key={person.id} person={person} update={handleUpdateScore} />)
        }
        <FormNewPerson setUsers={setUsers} />
      </div>
    </div>
  )
}

export default App
