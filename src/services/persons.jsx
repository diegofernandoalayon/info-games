import axios from "axios"
const baseUrl = 'http://localhost:3002/persons'

export const getPersons = async () => {
 const {data} = await axios.get(baseUrl)
 return data  
}

export const updateScore = async (id, data) => {
  console.log(id,data)
  await axios.put(`${baseUrl}/${id}`, data )
}

export const getPerson = async (id) => {
  const {data} = await axios.get(`${baseUrl}/${id}`)
  return data
}