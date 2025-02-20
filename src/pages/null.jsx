import { useState } from 'react'
import "./page.css"


function Null(error="404") {
  const [count, setCount] = useState(0)

  return (
    <div className='null'>
        404 Not Found!!
    </div>
  )
}

export default Null
