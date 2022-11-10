import React from 'react'

const Document = ({title, href}) => {
    const style = {
        backgroundImage: "url(/download.png)",
        backgroundSize: "contain"
    }
  return (
    <a className='document-block' href={href}>
        <div className='document-block-image' style={style}></div>
        <span className='document-block-title'>{title}</span>
    </a>
  )
}

export default Document