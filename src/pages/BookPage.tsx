
import { useState, useEffect } from "react"
import { Book } from "../components/Book"
import { IBook } from "../types/data"
import axios from 'axios';

export const BookPage = () => {
  const [books, setBooks] = useState<IBook[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    getBooks()
    setUpdate(false)
  }, [isUpdate])

  const getBooks = async () => {
    try {
      const response = await axios
        .get('http://localhost:3001/books')

      const data = response.data

      setBooks(data.reverse())

    } catch(error: any) {
      console.log(error)
    }
  }
  
  return (
    <>      
      <h1>All Our Books</h1>
      {books.map((book: IBook) => (
        <div style={{backgroundColor: "lightblue", marginBottom: 10, paddingLeft: 10}}>
          <Book
            key={book.id} 
            title={book.title}
            description={book.description}
            author={book.author}
          />
        </div>
      ))}
    </>
  )
}