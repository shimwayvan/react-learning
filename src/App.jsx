import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App({isloggedin}) {
  return (
    <div className="App">
      {isloggedin ? <h1>Welcome to the App</h1> : <h1>Please log in to continue</h1>}
    </div>    
  )
}

export default App


//function App() {
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