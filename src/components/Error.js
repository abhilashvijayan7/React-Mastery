import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    console.log(error)

  return (
    <div>
      <h1>opps somthing went wrong</h1>
      <h2>{error.status} {error.statusText} </h2>
    </div>
  )
}

export default Error
