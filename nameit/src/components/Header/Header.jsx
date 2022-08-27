import React from 'react'
import "./Header.css"

const Header = ({headerExpanded}) => {
  return (
    <div className='header-container'>
      <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="" className={`header-img ${headerExpanded ? 'header-img-expanded' : 'header-img-contracted'}`}/>
      <h1 className={`header-text ${headerExpanded ? 'header-text-expanded':'header-text-contracted'}`}>Name it</h1>
    </div>
  )
}

export default Header;
