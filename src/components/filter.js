import React from 'react'

const Filter = (props) => {
  
    const handleSearchChange = (event) =>{
      props.setFilter(event.target.value)
    }
  
    return(
      <div>Filter shown with: <input value = {props.filter} onChange={handleSearchChange}/></div>
    )
  }
  

export default Filter