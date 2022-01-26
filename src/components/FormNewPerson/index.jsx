import { useState } from 'react'
import personServices from '../../services/persons'

const FormNewPerson = ({ setUsers }) => {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: name,
      score: []
    }
    personServices
      .createPerson(newPerson)
      .then((data) => {
        console.log('data', data)
        setUsers((actual) => {
          return [...actual, data]
        })
      })

    setName('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name new User' type='text' value={name} onChange={(event) => setName(event.target.value)} />
        <button>Create</button>
      </form>
    </>
  )
}
export default FormNewPerson
