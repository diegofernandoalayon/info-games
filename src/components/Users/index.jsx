
const Users = ({person}) => {

  console.log(person.score)
  const average = (list) => {
    const avg = list.reduce((acc, ele) => acc+=ele,0)
    return (avg/list.length).toFixed(3)
  }
  return(
    <div>
      <h1>{person.name}</h1>
      <h3>{average(person.score)}</h3>
      {

        person.score.map((score, index ) => <p onClick={() => console.log(score) } key={index}>{score}</p>)
      }
    </div>
  )
}

export default Users