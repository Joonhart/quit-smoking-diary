import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        LOGO
      </Link>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="goal">목표 설정</Link>
        <Link to="stat">흡연 일지</Link>
      </nav>
    </header>
  )
}

export default Navbar
