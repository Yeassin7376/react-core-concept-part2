import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Posts from './Posts'
import './App.css'
import { Suspense } from 'react'
import Friends from './Friends'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

//  const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
//  }

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

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

      <Suspense fallback={<h2>All Posts are comming</h2>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>  
      </Suspense>    */}

      {/* <Suspense fallback={<h3>Friends are comming for treat.</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>   */}
      
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
