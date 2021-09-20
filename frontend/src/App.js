import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen/homescreen'



const App = () => {
  return (
    <Router>
    <Route path='/' component={HomeScreen} exact />
    </Router>
  )
}

export default App
