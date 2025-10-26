import React from 'react'
import  style from "./Left_Section.module.css";
import Hero_Text from './Texts/Hero_Text.jsx';
import Button from './btn/Button.jsx';
const Left_Section = () => {
  return (
    <div className={style.Left_Section}>
      <Hero_Text />
      <Button txt={"Get connected"}/>
    </div>
  )
}
export default Left_Section