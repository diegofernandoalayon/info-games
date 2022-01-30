import { useEffect, useState } from 'react'
import './App.css'
import personServices from './services/persons'
// import Users from './components/Users'
// import FormNewPerson from './components/FormNewPerson'
// import { Routes, Route } from 'react-router'
import { Routes, Route, Link } from 'react-router-dom'
// import List from './components/List'
import SprintPage from './pages/SprintPage'
import UsersPage from './pages/UsersPage'

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
  return (
    <div className='App'>
      <header className='nav-bar'>
        <h1>info-games</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/sprint'>Sprint</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<h1>home</h1>} />
          <Route path='/users' element={<UsersPage users={users} handleUpdateScore={handleUpdateScore} setUsers={setUsers} />} />
          <Route path='/sprint' element={<SprintPage />} />
          <Route path='/*' element={<h1>ruta no encontrada</h1>} />
        </Routes>

      </div>
    </div>
  )
}

export default App
