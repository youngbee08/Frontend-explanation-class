import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <p>Oops! We couldnt find this page <Link to="/login">Go back home</Link></p>
    </div>
  )
}

export default Error404