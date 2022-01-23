import React from 'react'

const NewPerson = (props) =>{
  
    const handlePersonChange = (event) =>{
      props.setNewName(event.target.value)
    }
    const handlePhoneChange = (event) =>{
      props.setNewPhone(event.target.value)
    }
  
    return(
      <div> name: <input value ={props.newName} onChange={handlePersonChange}/>
            phone:<input value ={props.newPhone} onChange={handlePhoneChange}/></div>
      
    )
  }

export default NewPerson