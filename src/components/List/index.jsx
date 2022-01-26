import Users from '../Users/index'
import FormNewPerson from '../FormNewPerson/index'
const List = ({ users, handleUpdateScore, setUsers }) => {
  return (
    <>
      {
         users.map(person => <Users key={person.id} person={person} update={handleUpdateScore} />)
      }
      <FormNewPerson setUsers={setUsers} />
    </>
  )
}

export default List
