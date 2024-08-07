import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './views/dashboard/dashboard';
import Login from './views/login/login';

function App() {

  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path='/' element = {<Dashboard />}></Route>
          <Route path='/login' element = {<Login />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App