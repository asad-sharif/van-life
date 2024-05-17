import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='site-logo'>#VANLIFE</Link>
        <nav>
          <Link to='/vans'>Vans</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/vans' element={<Vans />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

