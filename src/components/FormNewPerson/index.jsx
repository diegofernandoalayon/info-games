import { useState } from 'react'
// import personServices from '../../services/persons'

const FormNewPerson = ({ createNewPerson }) => {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    createNewPerson(name)
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
