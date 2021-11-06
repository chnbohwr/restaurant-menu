import { useState } from 'react'
import './App.css'
import Card from './Card'
import set1 from './images/set1.jpg';
import set2 from './images/set2.jpg';
import set3 from './images/set3.jpg';
import set4 from './images/set4.jpg';
import set5 from './images/set5.jpg';
import set6 from './images/set6.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="cardContainer">
      <Card bg={set1} />
      <Card bg={set2} />
      <Card bg={set3} />
      <Card bg={set4} />
      <Card bg={set5} />
      <Card bg={set6} />
      </div>
    </div>
  )
}

export default App
