import React, { useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail() {
    const activeStyles = {
        fontWeight: '900',
        color: 'black'
    }

    const [van, setVan] = React.useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [params.id])

    if (!van) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="host-van-detail-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-card">
                <img src={van.imageUrl} alt="" />

                <div className="host-van-detail-content">
                    <nav className="host-van-detail-card-nav">
                        <NavLink to={`/host/vans/${van.id}/hostVanInfo`} style={({ isActive }) => isActive ? activeStyles : null}
                        >Details</NavLink>

                        <NavLink to={`/host/vans/${van.id}/hostVanPricing`} style={({ isActive }) => isActive ? activeStyles : null}
                        >Pricing</NavLink>
                        
                        <NavLink to={`/host/vans/${van.id}/hostVanPhotos`} style={({ isActive }) => isActive ? activeStyles : null}
                        >Photos</NavLink>
                    </nav>
                    
                    <h2>{van.name}</h2>
                    <p><strong>Category:</strong> { van.type}</p>
                    <p><strong>Visibility:</strong> public</p>
                   
                    <Outlet context={{van}}/>
                </div>
                
            </div>
        </div>
    )
}