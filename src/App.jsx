import { useEffect, useState } from 'react'
import './App.css'
import {getPersons} from './services/persons'
import Users from './components/Users'
function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{

    getPersons()
      .then(res => setCount(res))
  },[])
  
  const updateScore = (id) => {
    //pedir la info de cada user y luego actualizar mandando esta info mas la nueva, para evitar que se sobre escriba,
  }
  // console.log(a)
  return (
    <div className="App">
      <header >
      
      </header>
      <div className="App-header">
        {
          count.map(person => <Users key={person.id} person={person}/>)
        }
      </div>
    </div>
  )
}

export default App
