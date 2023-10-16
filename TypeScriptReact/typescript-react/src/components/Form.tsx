import React, { useState } from 'react'


interface Book {
  name: string,
  price: number
}

const Form: React.FC = () => {
  const [book, setBook] = useState<Book>({
    name: "",
    price: 0
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book, [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(book.name + book.price)

  }
  return (

    <form onSubmit={submitHandler} className='form' >
      <input type="text" required placeholder='Enter Book Name' onChange={handleNameChange} className='input' name='name' />
      <input type="number" required placeholder='Enter Book Price' onChange={handleNameChange} className='input' name='price' />
      <button className='btn'>Submit</button>
    </form>

  )
}

export default Form
