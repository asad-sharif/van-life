import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const activeStyles = {
    fontWeight: '900',
    color: 'black'
  }
  return (
    <header>
      <Link to='/' className='site-logo'>#VANLIFE</Link>
      <nav>
        <NavLink
          to='/host'
          style={({ isActive }) => isActive ? activeStyles : null}
        >Host
        </NavLink>

        <NavLink
          to='/vans'
          style={({ isActive }) => isActive ? activeStyles : null}
        >Vans
        </NavLink>

        <NavLink
          to='/about'
          style={({ isActive }) => isActive ? activeStyles : null}
        >About
        </NavLink>
      </nav>
    </header>
  )
}