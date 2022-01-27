import User from '../User/index'
import FormNewPerson from '../FormNewPerson/index'
import './list.css'
const List = ({ users, handleUpdateScore, createNewPerson }) => {
  return (
    <>
      <FormNewPerson createNewPerson={createNewPerson} />
      <div className='list-users'>
        {
          users.map(person => <User key={person.id} person={person} update={handleUpdateScore} />)
        }
      </div>
    </>
  )
}

export default List
