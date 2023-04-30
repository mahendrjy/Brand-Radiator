import { useEffect, useState } from 'react'

const Contact = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setStatus('idle')
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('pending')
    localStorage.setItem(
      'todos',
      JSON.stringify([...todos, todo])
    )
    setTodos([...todos, todo])
    setTodo('')
    setStatus('success')
  }

  useEffect(() => {
    const storedTodos =
      JSON.parse(localStorage.getItem('todos')) || []
    setTodos(storedTodos)
  }, [])

  useEffect(() => {
    let timeout

    if (status === 'success') {
      timeout = setTimeout(() => {
        setStatus('idle')
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [status])

  return (
    <form onSubmit={handleSubmit} className="contact">
      <label htmlFor="Todo"></label>
      <input
        id="Todo"
        type="text"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>{' '}
      {status === 'pending' && <span>Loading...</span>}
      {status === 'success' && <span>Success</span>}
      <div className="todos">
        {todos.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            {todos.map((todo) => (
              <div key={todo}>{todo}</div>
            ))}
          </>
        )}
      </div>
    </form>
  )
}

export default Contact
