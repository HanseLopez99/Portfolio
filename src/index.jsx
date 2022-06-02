import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'

const App = () => (
  <Router>
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
