import React from 'react'
import Button from '../Button/Button'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div className={style.logo}>
           <a href="">HUELLAS</a>
      </div>
      <div className={style.btn}>
            <Button txtBtn="PRODUCTOS" />
            <Button txtBtn="MUJER" />
            <Button txtBtn="HOMBRE" />
      </div>
    </nav>
  )
}

export default Navbar