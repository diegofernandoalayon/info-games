import User from '../User/index'
import FormNewPerson from '../FormNewPerson/index'
const List = ({ users, handleUpdateScore, createNewPerson }) => {
  return (
    <>

      {
        users.map(person => <User key={person.id} person={person} update={handleUpdateScore} />)
      }
      <FormNewPerson createNewPerson={createNewPerson} />
    </>
  )
}

export default List
