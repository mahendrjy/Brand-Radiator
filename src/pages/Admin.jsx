import { useEffect, useState } from 'react'

const Admin = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos =
      JSON.parse(localStorage.getItem('todos')) || []
    setTodos(storedTodos)
  }, [])

  return (
    <div className="admin">
      <h1>Admin</h1>
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
  )
}

export default Admin
