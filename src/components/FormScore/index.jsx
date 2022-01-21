import { useState } from "react"

const FormScore = ({id, update}) => {
  const [score, setScore] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if(score){
      const newScore = score.replace(',','.')
      if(!isNaN(newScore)){
        update(id, Number(newScore))
      }
    }
    setScore('')
  }

  const handleChange = (event) => {
    setScore(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={score} onChange={handleChange}/>
        <button onClick={handleSubmit}>Save</button>
        {score}
      </form>
    </>
  )
}

export default FormScore