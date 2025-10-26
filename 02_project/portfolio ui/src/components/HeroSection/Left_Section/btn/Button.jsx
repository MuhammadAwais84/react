import React from 'react'
import style from './Button.module.css'
const Button = (txt) => {
  return (
        <button className={style.btn}>{txt.txt}</button>
  )
}
export default Button
