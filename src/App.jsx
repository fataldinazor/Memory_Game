import { useState } from 'react'
import './App.css'
import GameList from './components/GameList'
import Header from "./components/Header"

function App() {
  return (
    <div className="app">
      <Header />
      <GameList />
    </div>
  )
}

export default App
