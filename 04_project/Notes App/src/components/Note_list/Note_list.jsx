import React from 'react'
import Note from '../Note/Note.jsx'
import styles from "./Note_list.module.css"
const Note_list = ({ notes, onDelete }) => {
  return (
    <div className={styles.noteList}>
      <h2 className={styles.title}>🧠 My Notes</h2>

      {notes.length === 0 ? (
        <p className={styles.empty}>No notes yet... add your first note! ✍️</p>
      ) : (
        notes.map((n) => (
          <Note
            key={n.id}
            id={n.id}
            note={n.note}
            onDelete={onDelete}
          />
        ))
      )} 
    </div>
  )
}

export default Note_list
