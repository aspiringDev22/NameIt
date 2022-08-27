import React from 'react'
import './SearchBox.css'

const SearchBox = ({handleInputChange}) => {
  return (
    <div className='search-container'>
      <input type="text" placeholder='Enter Keywords...' className='search-input' autoFocus onChange={(e)=>handleInputChange(e.target.value)}/>
    </div>
  )
}

export default SearchBox
