import * as React from 'react'

const Person = () => {
    let style = {
        backgroundImage: "url(/img/makarov.webp)"
    }
  return (
      <div className='person'>
        <div className='person-image' style={style} />
        <h2 className='person-name'>Имя Фамилия</h2>
        <span className='person-description'>Дополнительная информация о персоне</span>
      </div>
  )
}

export default Person