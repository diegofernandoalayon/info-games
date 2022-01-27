import { useState } from 'react'
import List from '../../components/List/index'

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
    <>
      <h2> Sprint </h2>
      <List
        users={usersSprint}
        handleUpdateScore={handleUpdateScore}
        createNewPerson={createNewPerson}
      />
      <button onClick={() => setUsersSprint([])}>Borrar Sprint</button>
    </>
  )
}
export default SprintPage
