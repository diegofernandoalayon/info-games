import axios from "axios"
const baseUrl = 'http://localhost:3002/persons'

export const getPersons = async () => {
 const {data} = await axios.get(baseUrl)
 return data  
}

// export const updateScore = async (id, score) => {
//   const person = await axios.get(`${baseUrl}/${id}`)
//   const personUpdate = {
//     ...person,
//     ...person.score = [...person.]
//   }
//   await axios.put(`${baseUrl}/${id}`,score )
// }

export const getPerson = async (id) => {
  const {data} = await axios.get(`${baseUrl}/${id}`)
  return data
}