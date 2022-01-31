import List from '../../components/List/index'
import personServices from '../../services/persons'

const UsersPage = ({ users, handleUpdateScore, setUsers }) => {
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
