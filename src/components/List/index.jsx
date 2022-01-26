import User from '../User/index'
import FormNewPerson from '../FormNewPerson/index'
const List = ({ users, handleUpdateScore, setUsers }) => {
  console.log('users', users)

  return (
    <>

      {
        users.map(person => <User key={person.id} person={person} update={handleUpdateScore} />)
      }
      <FormNewPerson setUsers={setUsers} />
    </>
  )
}

export default List
