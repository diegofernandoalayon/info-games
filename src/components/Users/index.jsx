import FormScore from '../FormScore'
import './users.css'
const Users = ({ person, update }) => {
  const average = (list) => {
    const avg = list.reduce((acc, ele) => (acc += ele), 0)
    return (avg / list.length).toFixed(2)
  }
  return (
    <div className='card-user'>
      <h2>{person.name}</h2>
      <FormScore id={person.id} update={update} />
      <h3>{average(person.score)}</h3>
      {

        person.score.map((score, index) => <p onClick={() => console.log(score)} key={index}>{score}</p>)
      }
    </div>
  )
}

export default Users
