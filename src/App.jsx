import Counter from './Counter'
import Batsman from './Batsman'
import './App.css'


function App() {

  function handleclick(){
    alert("btn clicked")
  }
  const handleclick3 = () =>{
    alert("btn clicked 3")
  }
  const handleclick5 = (num)=>{
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>    
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleclick}>click me</button> 

      <button onClick={function handleclick(){
        alert("btn clicked 2")
      }}>click me2</button>  

      <button onClick={handleclick3}>Click me 3</button>  

      <button onClick={() => alert("btn clicked 4")}>Click me 4</button> 

      <button onClick={() => handleclick5(7)}>click me5</button> 
    </>
  )
}

export default App
