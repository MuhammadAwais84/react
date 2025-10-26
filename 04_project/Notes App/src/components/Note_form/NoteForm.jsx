import React, { useState } from 'react'
import styles from './NoteForm.module.css'

const NoteForm = ({ onAdd, notes }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return

    const newNote = {
      id: notes.length+1,
      note: text
    }

    onAdd(newNote)
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note here..."
      />
      <button className={styles.button} type="submit">
        ➕ Add Note
      </button>
    </form>
  )
}

export default NoteForm
