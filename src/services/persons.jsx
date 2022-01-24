import axios from "axios"
const baseUrl = 'http://localhost:3002/persons'

const getPersons = async () => {
 const {data} = await axios.get(baseUrl)
 return data  
}

const updateScore = async (id, data) => {
  
  const status = await axios.put(`${baseUrl}/${id}`, data )
  return status
}

const getPerson = async (id) => {
  const {data} = await axios.get(`${baseUrl}/${id}`)
  return data
}
const createPerson = async (newPerson) => {
  const {data} = await axios.post(baseUrl,newPerson)
  return data
}

export default { getPersons, updateScore, getPerson, createPerson}