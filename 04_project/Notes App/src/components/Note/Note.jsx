import React from 'react'
import styles from './Note.module.css'

const Note = ({ note, id, onDelete }) => {
  return (
    <div className={styles.note}>
      <p><span>{id}:</span>{note}</p>
      <button className={styles.delete_btn} onClick={() => onDelete(id)}>
        🗑 Delete
      </button>
    </div>
  )
}

export default Note
