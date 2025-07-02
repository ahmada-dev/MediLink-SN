import React from 'react'

function ContentHeader({title, description} : {title?: string, description?: string}) {
  return (
    <div className="mb-10">
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-sm text-slate-500">{description}</p>
    </div>
  )
}

export default ContentHeader