import { useEffect, useState } from 'react'
const About = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div className="about">
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </>
      )}
    </div>
  )
}

export default About
