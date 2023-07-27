import React from 'react'

function ViewFullQuote() {
  return (
    <>
    <div>{localStorage.getItem('authorquote')}</div>
    <div>{localStorage.getItem('authorname')}</div>
    </>
  )
}

export default ViewFullQuote