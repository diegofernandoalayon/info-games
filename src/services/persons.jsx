import axios from "axios"
const baseUrl = 'http://localhost:3002/persons'

export const getPersons = async () => {
 const {data} = await axios.get(baseUrl)
 return data  
}

export const updateScore = async (id, data) => {
  
  const status = await axios.put(`${baseUrl}/${id}`, data )
  return status
}

export const getPerson = async (id) => {
  const {data} = await axios.get(`${baseUrl}/${id}`)
  return data
}

export const createPerson = async (newPerson) => {
  const {data} = await axios.post(baseUrl,newPerson)
  console.log(data)
}