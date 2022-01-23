
import React, { useState } from 'react'
import Person from './components/book'
import Filter from './components/filter'
import NewPerson from './components/person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '1234572', id:1},
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')
  
  const [filter, setFilter] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }


  const personToShow = filter === ""
    ? persons
    : persons.filter(per => per.name.toLowerCase().includes(filter.toLowerCase()) === true)

  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter = {filter} setFilter={setFilter}></Filter>

      <h2>add a new</h2>

      <NewPerson newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone}></NewPerson>

      <form onSubmit = {addPerson}>
        <div>
          <button>
            add
            </button>
        </div>
      
      </form>

      <h2>Numbers</h2>
      <ul>
        {personToShow.map(per =>
          <Person key = {per.id} per = {per} />)}
      </ul>
      {console.log(persons)}
    </div>
    
  )
}

export default App