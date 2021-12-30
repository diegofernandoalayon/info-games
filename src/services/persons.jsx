import axios from "axios"
const baseUrl = 'http://localhost:3002/persons'
export const getPersons = async () => {
 const {data} = await axios.get(baseUrl)
 return data  
}