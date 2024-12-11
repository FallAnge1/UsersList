import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="w-10/12 text-xl lg:w-1/6 lg:text-xs lg:hover:text-base lg:hover:w-1/3 h-12 flex items-center bg-[#333533] rounded-full my-5 fixed top-0 transition-all">
      <ul className="w-full flex gap-3 justify-evenly items-center">
        <Link to={'/'}>
          <li className="hover:font-black transition-all hover:text-danger">
            Домой
          </li>
        </Link>
        <Link to={'about'}>
          <li className="hover:font-black transition-all hover:text-danger">
            About
          </li>
        </Link>
        <Link to={'contacts'}>
          <li className="hover:font-black transition-all hover:text-danger">
            Оценка
          </li>
        </Link>
      </ul>
    </header>
  )
}

export default Header
