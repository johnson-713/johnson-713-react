import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './data'
import Card from './Card'

function App() {

  const filteredData = data.filter((i) => i.age > 20)

  const handleclick = () => {
    alert("Hi!!!!")
  }

  return (
    <div>
      {
        data.length > 0 ? (
          <div>
            {filteredData.map((i, ind) => (
            <Card 
              key={ind}
              image={i.img}
              name={i.name}
              age={i.age}
              handleClick={handleclick}
            />
          ))}
          </div>
        ) : <p>No data available</p>
      }
    </div>
  )
}

export default App


//Event handler - onclick, onchange // onClick, onChange
