import List from '../../components/List/index'
const UsersPage = ({ users, handleUpdateScore, setUsers }) => {
  return (
    <>
      <h2>users</h2>
      <List users={users} handleUpdateScore={handleUpdateScore} setUsers={setUsers} />
    </>
  )
}

export default UsersPage
