
const FormScore = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input />
        <button onClick={()=> console.log('hola')}>Save</button>
      </form>
    </>
  )
}

export default FormScore