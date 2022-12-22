import React from 'react'

function Status({status}) {

  return (
    <div className={`p-2 rounded text-capitalize text-white ${status != 'draft'? ('bg-success'):('bg-secondary')}`}>{status}</div>
  )
}

export default Status