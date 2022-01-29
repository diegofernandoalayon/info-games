import { useState } from 'react'
import Button from '../../components/Button'
import List from '../../components/List/index'
import './sprintPage.css'

const SprintPage = () => {
  const [usersSprint, setUsersSprint] = useState([])

  const handleUpdateScore = (id, score) => {
    const person = usersSprint.find(p => p.id === id)
    const personUpdate = {
      ...person,
      score: [...person.score, score]
    }
    setUsersSprint(actual => actual.map(person => person.id === id ? personUpdate : person))
  }
  const createNewPerson = (name) => {
    const newPerson = {
      name: name,
      score: [],
      id: (1 + Math.random()) * 200
    }
    if (name) {
      setUsersSprint(actual => [...actual, newPerson])
    }
  }
  return (
    <div>
      <div className='title-page'>
        <h2> Sprint </h2>
        <Button bgColor='tomato' onClick={() => setUsersSprint([])}>Borrar Sprint</Button>
      </div>
      <List
        users={usersSprint}
        handleUpdateScore={handleUpdateScore}
        createNewPerson={createNewPerson}
      />
    </div>
  )
}
export default SprintPage
