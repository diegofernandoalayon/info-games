import { useState } from 'react'
import Button from '../Button'
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
        <Button>Create</Button>
      </form>
    </>
  )
}
export default FormNewPerson
