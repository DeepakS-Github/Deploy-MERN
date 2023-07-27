import React from 'react'
import style from './css/navbar.module.css'

function Navbar() {
  return (
    <nav className={style.navbar}>
        <span className={style.mainNav}>
            <span className={style.logoText}>Great Quotes</span>
            <span className={style.tabs}>
              <a href='/'><span>All Quotes</span></a>
              <a href='/newquotes'><span>New Quotes</span></a>
            </span>
        </span>
    </nav>
  )
}

export default Navbar