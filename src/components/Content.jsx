import { useEffect, useState } from 'react'

const Content = () => {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])

  const handleOpen = () => setModal(true)
  const handleClose = () => setModal(false)

  useEffect(() => {
    setData([1, 2, 3])
  }, [])

  return (
    <div className="content">
      {modal && (
        <div className="modal">
          <button onClick={handleClose} className="close">
            CLOSE
          </button>
        </div>
      )}
      <h1 className="content-header">Content</h1>
      <div className="content-body">
        {data.map((item) => (
          <div key={item} onClick={handleOpen}></div>
        ))}
      </div>
    </div>
  )
}

export default Content
