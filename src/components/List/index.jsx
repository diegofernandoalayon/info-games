import User from '../User/index'
import FormNewPerson from '../FormNewPerson/index'
import './list.css'
const List = ({ users, handleUpdateScore, createNewPerson, handleDeletePerson }) => {
  return (
    <>
      <FormNewPerson createNewPerson={createNewPerson} />
      <div className='list-users'>
        {
          users.map(person => (
            <User
              key={person.id}
              person={person}
              update={handleUpdateScore}
              handleDeletePerson={handleDeletePerson}
            />))
        }
      </div>
    </>
  )
}

export default List
