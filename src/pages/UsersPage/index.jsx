import List from '../../components/List/index'
import personServices from '../../services/persons'

const UsersPage = ({ users, handleUpdateScore, setUsers }) => {
  const createNewPerson = (name) => {
    console.log(name)
    const newPerson = {
      name: name,
      score: []
    }
    personServices
      .createPerson(newPerson)
      .then((data) => {
        setUsers((actual) => {
          return [...actual, data]
        })
      })
  }

  return (
    <>
      <h2>users</h2>
      <List users={users} handleUpdateScore={handleUpdateScore} createNewPerson={createNewPerson} />
    </>
  )
}

export default UsersPage
