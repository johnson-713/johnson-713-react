// import React from 'react'
import './Card.css'

// eslint-disable-next-line react/prop-types
function Card({image, name, age, handleClick}) {
  return (
    <div className='card'>
      <img className='card-image' src={image} width={100} height={100} />
      <div className='card-text'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  )
}

export default Card
