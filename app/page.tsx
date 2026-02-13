"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { LibraryButton } from "@/components/library-button"

type Book = {
  id: number
  title: string
  author: string
}

export default function Home() {
  const [query, setQuery] = useState("")
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [books, setBooks] = useState<Book[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editAuthor, setEditAuthor] = useState("")

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  )

  const handleAdd = () => {
    if (!title || !author) return

    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    }

    setBooks([newBook, ...books])
    setTitle("")
    setAuthor("")
  }

  const handleRemove = (id: number) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const handleEdit = (book: Book) => {
    setEditingId(book.id)
    setEditTitle(book.title)
    setEditAuthor(book.author)
  }

  const handleSaveEdit = (id: number) => {
    if (!editTitle || !editAuthor) return

    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, title: editTitle, author: editAuthor } : book
      )
    )

    setEditingId(null)
    setEditTitle("")
    setEditAuthor("")
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditTitle("")
    setEditAuthor("")
  }

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">
        📚 Library Management System
      </h1>

      <Input
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex gap-2">
        <Input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <LibraryButton variant="add" onClick={handleAdd}>
          Add Book
        </LibraryButton>
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500">No books found.</p>
      )}

      {filteredBooks.map((book) => (
        <Card key={book.id}>
          <CardContent className="p-4 space-y-2">
            {editingId === book.id ? (
              <>
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Input
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                />
                <div className="flex gap-2">
                  <LibraryButton
                    variant="add"
                    onClick={() => handleSaveEdit(book.id)}
                  >
                    Save
                  </LibraryButton>
                  <LibraryButton
                    variant="remove"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </LibraryButton>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-semibold text-lg">{book.title}</h2>
                <p className="text-gray-600">{book.author}</p>
                <div className="flex gap-2">
                  <LibraryButton
                    variant="edit"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </LibraryButton>
                  <LibraryButton
                    variant="remove"
                    onClick={() => handleRemove(book.id)}
                  >
                    Remove
                  </LibraryButton>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </main>
  )
}
