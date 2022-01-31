import List from '../../components/List/index'
import personServices from '../../services/persons'

const UsersPage = ({ users, setUsers }) => {
  const createNewPerson = (name) => {
    const newPerson = {
      name: name,
      score: []
    }
    if (name) {
      personServices
        .createPerson(newPerson)
        .then((data) => {
          setUsers((actual) => {
            return [...actual, data]
          })
        })
    }
  }

  const handleDeletePerson = (id) => {
    personServices
      .deletePerson(id)
      .then((data) => {
        setUsers((actual) => actual.filter((user) => user.id !== id))
      })
  }
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
    <div>
      <h2>users</h2>
      <List
        users={users}
        handleUpdateScore={handleUpdateScore}
        createNewPerson={createNewPerson}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default UsersPage
