import React from 'react'
import styles from './Hero_Text.module.css'
const Hero_Text = () => {
  return (
    <div className={styles.Hero_Text}>
        <h1>Your<span>Name</span></h1>
        <h2>Professional Title</h2>
        <p>
            This is a brief introduction about yourself. Highlight your skills, experience, and what makes you unique in your field.
        </p>
    </div>
  )
}

export default Hero_Text
