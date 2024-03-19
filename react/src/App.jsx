import './App.css'
import { data } from './data'
import Card from './Card'
import { useRef, useState } from 'react'

function App() {
  // const [selectedCard, setSelectedCard] = useState({})
  const [count, setCount] = useState(0)  //state change (mutable) refresh (state -> initial state)
  const countRef = useRef(0)
     // ref -> 1 -> nextpage -> 1 -> future contents

  const filteredData = data.filter((i) => i.age > 20)

  const handleclick = () => {
    setCount(count+1)
    alert(`no of count ${count}`)

    console.log(countRef)
  }

  

  return (
    <div>
      {
        data.length > 0 ? (
          <div>
            {filteredData.map((i, index) => (
            <Card 
              key={index}
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
