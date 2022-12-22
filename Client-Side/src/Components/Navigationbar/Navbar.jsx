import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import {BsList} from 'react-icons/bs'

function Navbar() {

  //get the pathname to changed the List and Add new button logic 
  const pathname = window.location.pathname;


  return (
    <nav className="navbar bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand">FAQ Manager - iLabs</a>
        {pathname == '/' ? (<a href='/add/question/new' className="btn shadow-sm btn-outline-none d-flex align-items-center gap-2 button-backgroung-color">
          <IoMdAddCircle color='blue' />Add New Question
        </a>):(
          <a href='/'  className="btn shadow-sm btn-outline-none d-flex align-items-center gap-2 bg-success text-white">
          <BsList />List
        </a>
        )}
      </div>
    </nav>
  )
}

export default Navbar