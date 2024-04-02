import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <div className={styles.gemo}>
      <div>
        <h1>React Navbar</h1>
        </div>
        <div>
            <button className={styles.level}>Difficulty Level: 0;</button>
        </div>
    </div>
  )
}

export default Button
