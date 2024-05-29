import { NavLink, Outlet } from "react-router-dom"


export default function HostLayout() {
    const activeStyles = {
        fontWeight: '900',
        color: 'black'
    }
    return (
        <div className="host-layout-container">

            <nav className="host-nav">
                <NavLink to='.' end style={({ isActive }) => isActive ? activeStyles : null}>Dasboard</NavLink>
                <NavLink to='income' style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
                <NavLink to='vans' style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
                <NavLink to='reviews' style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
            </nav>

            <Outlet />
        </div>

    )
}