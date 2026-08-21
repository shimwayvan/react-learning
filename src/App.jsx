import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() { 
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')
  
  function addTodo(){
    
    setTodo([...todo, {id: Date.now(), text: input, done: false}])
    setInput('')
  }

  function handleChange(e){
    setInput(e.target.value)
  }
  
  return (
    <div className="App">
      <input type="text" placeholder='Enter your todo' onChange={handleChange} value ={input} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todo.map((item) => (
          <div>
            <li style={{ textDecoration: item.done ? 'line-through' : 'none', cursor: 'pointer' }} key={item.id} onClick={() => {
            setTodo(todo.map((t) => t.id === item.id ? { ...t, done: !t.done } : t))
          }}>
            {item.text}
            
          </li>
          <button onClick={() => {
              setTodo(todo.filter((t) => t.id !== item.id))
            }}>
              Delete
            </button>
          </div>
          
        ))}
      </ul>
    </div>    
  )
}

export default App

// function App() { 
//   const [todo, setTodo] = useState([])
//   const [input, setInput] = useState('')
  
//   function addTodo(){
    
//     setTodo([...todo, {id: Date.now(), text: input, done: false}])
//     setInput('')
//   }

//   function handleChange(e){
//     setInput(e.target.value)
//   }
  
//   return (
//     <div className="App">
//       <input type="text" placeholder='Enter your todo' onChange={handleChange} value ={input} />
//       <button onClick={addTodo}>Add Todo</button>
//       <ul>
//         {todo.map((item) => (
//           <div>
//             <li style={{ textDecoration: item.done ? 'line-through' : 'none', cursor: 'pointer' }} key={item.id} onClick={() => {
//             setTodo(todo.map((t) => t.id === item.id ? { ...t, done: !t.done } : t))
//           }}>
//             {item.text}
            
//           </li>
//           <button onClick={() => {
//               setTodo(todo.filter((t) => t.id !== item.id))
//             }}>
//               Delete
//             </button>
//           </div>
          
//         ))}
//       </ul>
//     </div>    
//   )
// }

// function App() { Counter component that uses the useState hook to manage a num state variable. It renders two buttons that increment and decrement the num value when clicked. The component is exported as the default export of the module.
//   const [num, setNum] = useState(0)
  
//   function add(){
//     setNum(num + 1)
//   }

//   function subtract(){
//     setNum(num - 1)
//   }
  
//   return (
//     <div className="App">
//       <button onClick={add}>+</button>
//       <span>{num}</span>
//       <button onClick={subtract}>-</button>
//     </div>    
//   )
// }

// function App() { okay
//   const [name, setName] = useState('')
  
//   function handleChange(e){
//     setName(e.target.value)
//   }
  
//   return (
//     <div className="App">
//       <input type="text" placeholder='Enter your name' onChange={handleChange} value ={name} />
//       <p>Hello {name}</p>
//     </div>    
//   )
// }

// function App() { This component uses the useState hook to manage a likes state variable. It renders a button that increments the likes count when clicked. The component is exported as the default export of the module.
//   const [likes, setLikes] = useState(0)
  
  
//   return (
//     <div className="App">
//       <button onClick={() => setLikes(likes + 1)}> ❤️ {likes} Likes</button>
//     </div>    
//   )
// }

// function App({count}) {  This compnent counts the number of new messages and conditionally renders a message if the count is greater than zero. The component is exported as the default export of the module.
//   return (
//     <div className="App">
//       {count > 0 && <p> You have {count} new messages</p>}
//     </div>    
//   )
// }



// function App({isloggedin}) { This is the App component that takes a prop called isloggedin. It conditionally renders a welcome message if the user is logged in, or a prompt to log in if they are not. The component is exported as the default export of the module.
//   return (
//     <div className="App">
//       {isloggedin ? <h1>Welcome to the App</h1> : <h1>Please log in to continue</h1>}
//     </div>    
//   )
// }


//function App() {  This is an alternative version of the App component that uses the useState hook to manage a count state variable. It also defines an array of player names and renders them in an unordered list. The component is commented out, so it is not currently being used in the application.
  // const [count, setCount] = useState(0)
  // const p = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe', 'Lewandowski', 'Kane', 'Salah', 'De Bruyne', 'Modric', 'Benzema']

  
  // return (
  //   <>
  //     <ul>
  //       {p.map((player, index) => (
  //         <li key={index}>{player}</li>
  //       ))}
  //     </ul>
  //   </>
  // )
//}

