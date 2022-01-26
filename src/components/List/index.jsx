import Users from '../Users/index'

const List = ({ users, handleUpdateScore }) => {
  return (
    <>
      {
         users.map(person => <Users key={person.id} person={person} update={handleUpdateScore} />)
      }
    </>
  )
}

export default List
