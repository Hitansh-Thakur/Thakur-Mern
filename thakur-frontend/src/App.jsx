import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Approutes from "./routes/Approutes.jsx"
import { BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Approutes/>
      </Router>    
    </>
  )
}

export default App
