import './App.css';
import {useState} from 'react';
import AnimalShow from './AnimalShow';
export default function App() 
{
  const[count,setCount] = useState(0)
  function getRandomAnimal()
  {
    const animals = ['cat','dog','dinosaurus','cow','gator','horse']
    return animals[Math.floor(Math.random() * animals.length)]
  }
  //console.log(getRandomAnimal())
  const [animals,setAnimals] = useState([])
  function handleClick()
  {
    setAnimals([...animals, getRandomAnimal()]) 
    setCount(count+1)
  }
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} /> 
  })

  return (
    <div className='app'>
      <button onClick={handleClick} >Add Animal </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

