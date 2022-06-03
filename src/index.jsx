import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'
import Navbar from './components/navbar/Navbar'
import './theme/index.scss'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={(
          <Portfolio />
        )}
      />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
