import React, { useState, useEffect } from 'react'
import NoteForm from './components/Note_form/NoteForm'
import Note_list from './components/Note_list/Note_list'

const App = () => {
  const [notes, setNotes] = useState([])

  // 🧠 Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    if (savedNotes) setNotes(savedNotes)
  }, [])

  // 💾 Save notes to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  // ➕ Add new note
  const handleAddNote = (newNote) => {
    setNotes(prevNotes => [newNote, ...prevNotes])
  }

  // 🗑️ Delete note
  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id))
  }

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>🧠 My Notes</h1>

      <NoteForm onAdd={handleAddNote} notes={notes} />
      <Note_list notes={notes} onDelete={handleDeleteNote} />
    </div>
  )
}

export default App
